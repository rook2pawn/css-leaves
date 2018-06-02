// only polyfill .finished in browsers that already support animate()
if (document.body.animate) {

  // Chrome does not seem to expose the Animation constructor globally
  if (typeof Animation === 'undefined') {
    window.Animation = document.body.animate({}).constructor;
  }

  if (Animation.prototype.finished === undefined) {
    Object.defineProperty(Animation.prototype, 'finished', {
      get() {
        if (!this._finished) {
          this._finished = this.playState === 'finished' ?
            Promise.resolve() :
            new Promise((resolve, reject) => {
              this.addEventListener('finish', resolve, {once: true});
              this.addEventListener('cancel', reject, {once: true});
            });
        }
        return this._finished;
      }
    });
  }
}

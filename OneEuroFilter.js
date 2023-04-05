class OneEuroFilter {
    constructor(te, mincutoff=1.0, beta=0.007, dcutoff=1.0) {
        this.x = null;
        this.dx = 0;
        this.te = te;
        this.mincutoff = mincutoff;
        this.beta = beta;
        this.dcutoff = dcutoff;
        this.alpha = this._alpha(this.mincutoff);
        this.dalpha = this._alpha(this.dcutoff);
    }

    _alpha(cutoff) {
        let tau = 1.0 / (2 * Math.PI * cutoff);
        return 1.0 / (1.0 + tau / this.te);
    }

    predict(x, te) {
        let result = x;
        this.te=te;
        if (this.x !== null) {
            let edx = (x - this.x) / te;
            this.dx = this.dx + (this.dalpha * (edx - this.dx));
            let cutoff = this.mincutoff + this.beta * Math.abs(this.dx);
            this.alpha = this._alpha(cutoff);
            result = this.x + this.alpha * (x - this.x);
        }
        this.x = result;
        return result;
    }
}
export {OneEuroFilter};
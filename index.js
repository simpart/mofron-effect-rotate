/**
 * @file mofron-effect-dev/index.js
 * @brief effect module template for developper
 * @license MIT
 */
module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     * 
     * @param (mixed) 
     *                key-value: effect config
     * @short
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("Rotate");
            this.shortForm("count");
            this.transition(["transform", "webkit-transform", "-moz-transform", "-ms-transform"]);
            
            this.confmng().add("count", { type:"number", init:5 });
	    this.speed(10000);
            
            /* init config */
	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * effect contents
     * 
     * @type private
     */
    contents (cmp) {
        try {
            /* effect contents */
	    cmp.style({
                "transform" : "rotate("+ this.count() +"turn)"
	    });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    count (prm) {
        try {
            return this.confmng("count", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */

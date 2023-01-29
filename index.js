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
    constructor (p1,p2) {
        try {
            super();
            this.modname("Rotate");
            this.shortForm("count", "type");
            this.transition("transform");
            
            this.confmng().add("count", { type:"number", init:5 });
	    this.confmng().add("type",  { type:"string", init:"turn", select:["turn","deg"] });

	    this.speed(10000);
	    this.eid(0);
            
            this.beforeEvent((b1,b2) => {
                if ( ("turn" === b1.type()) &&
		     ("rotate("+ b1.count() +"turn)" == b2.style("transform")) ) {
                    b2.style({ "transform": null }, { bpref: true });
                }
	    });

            /* init config */
	    if (0 < arguments.length) {
                this.config(p1,p2);
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
                "transform" : "rotate("+ this.count() + this.type() + ")"
	    }, { bpref: true });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    value (prm) {
        try {
            return this.count(prm);
	} catch (e) {
             console.error(e.stack);
             throw e;
	}
    }

    count (prm) {
        try {
	    if ('number' === typeof prm) {
                this.speed(2000 * prm);
	    }
            return this.confmng("count", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }

    type (prm) {
        try {
            return this.confmng("type", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */

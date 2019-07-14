class Wizard {
	constructor({name, bearded=true})
	{
		this.name = name;
		this.bearded = bearded || false;
		this.isRested = true;
		this.castCount = 0;
	}
// Methods
	incantation(spell) {
		return spell.toUpperCase();
	}
	cast(curse) {
		this.castCount++;
		if (this.castCount >= 3) { this.isRested = false;
			return 'I SHALL NOT CAST!'} 
		return 'MAGIC BULLET';

	}
}
module.exports = Wizard
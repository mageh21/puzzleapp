import gsap from 'gsap';
import { Shape, PointText } from 'paper';

export default class Dot {
	constructor(id, position, color, group) {
		this.id = new PointText({
			content: id,
			justification: 'center',
			fontSize: 10,
			fillColor: color,
			position: (position.x < 10 || position.y < 10) ? position.add(7) : position.subtract(7)
		});
		this.position = position;
		this.color = color;
		this.dotSize = 3;
		this.shape = new Shape.Circle({
			position: position,
			radius: this.dotSize,
			fillColor: color
		});

		group.addChild(this.id);
		group.addChild(this.shape);

		gsap.fromTo(this.shape, 0.25,
			{
				opacity: 0.5,
				radius: this.dotSize * 4
			},
			{
				opacity: 1,
				radius: this.dotSize,
				ease: 'power1.out'
			});
	}

	remove(animate = false) {
		this.id.remove();
		(animate)
			? this.shape.remove()
			: gsap.to(this.shape, 0.2,
				{
					opacity: 0.2,
					radius: this.dotSize * 4,
					ease: 'power4.inOut',
					delay: 0.02,
					onComplete: () => {
						this.shape.remove();
					}
				})
	}
}
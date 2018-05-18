export default class Lunbo {
  	constructor(element) {
	    this.viewport = element;
	    this.father = element.children[0];
	    this.photos = this.father.children;
	    // 自设的图片宽, 包括 margin
	    this.photoWidth = this.photos[0].offsetWidth + parseInt(getComputedStyle(this.photos[0]).marginLeft) + parseInt(getComputedStyle(this.photos[0]).marginRight);

	    // (可视宽 -焦点图片宽) / 2，焦点图到视口左或右的距离
	    this.partnerWidth = (this.viewport.clientWidth - this.photoWidth) / 2;

	    // 表示接近边缘的图片 Id。接近左边缘的即第2 张图，右边缘的则为倒数第二张
	    this.closeLeftId = 1;
	    this.closeRightId = this.photos.length - 2;

	    this.photosQuantity = this.photos.length / 3;

	    // 当运动到上面两个 Id 时默默移动到的对应 Id
	    // 接近左边时跳转到右边块的第二张
	    // 接近右边则跳转到左边块的倒数第二张
	    this.backLeftId = this.photosQuantity - 2;
	    this.backRightId = this.photosQuantity * 2 + 1;

	    // 注册移动事件
	    element.children[1].addEventListener('click', this.left.bind(this));
	    element.children[2].addEventListener('click', this.right.bind(this));
  	}

  	// 计算移动距离
  	countX(id) {
    	return -id * this.photoWidth + this.partnerWidth;
  	}

  	// 切换 / 载入 / 移动图片。无参数则除法求整，仅用来切换到一个瞎选的初始焦点
  	load(newId = parseInt(this.photos.length / 2) - 1) {
	    this.father.style.transform = `translate3d(${this.countX(newId)}px, 0, 0)`;

	    if (newId === this.closeLeftId){
	      	newId = this.backRightId;
	    } else if (newId === this.closeRightId){
	      	newId = this.backLeftId;
	    } else {
	      	this.showingId = newId;
	      	return;
	    }
    	this.father.addEventListener('transitionend', this.backMove.bind(this, newId), {once: true});
  	}

	backMove(newId) {
	    this.father.classList.add("moving");
	    this.father.style.transform = `translate3d(${this.countX(newId)}px, 0, 0)`;

	    this.father.clientWidth;

	    this.father.classList.remove("moving");
	    this.showingId = newId;
	}

	left() {
	    this.load(this.showingId - 1);
	}

	right() {
	    this.load(this.showingId + 1);
	}
}
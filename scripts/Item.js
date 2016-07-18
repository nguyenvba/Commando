class Item{
  constructor(x, y, group, spriteName){
    this.sprite = group.create(x, y, spriteName);
    this.sprite.name = spriteName;
  }
}

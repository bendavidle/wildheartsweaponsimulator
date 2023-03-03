export class NodeLine {
  public color = 'black';
  private startPosition: Position;
  private endPosition: Position;

  constructor(
    private ctx: CanvasRenderingContext2D,
    startElement: HTMLDivElement,
    endElement: HTMLDivElement
  ) {
    this.startPosition = this.#getOffset(startElement);
    this.endPosition = this.#getOffset(endElement);
  }

  draw() {
    this.ctx.lineWidth = 4;
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.moveTo(this.startPosition.x, this.startPosition.y);
    this.ctx.lineTo(this.endPosition.x, this.endPosition.y);

    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();
  }

  #getOffset(node: HTMLDivElement): Position {
    const rect = node.getBoundingClientRect();
    return {
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY,
    };
  }
}

export class Position {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

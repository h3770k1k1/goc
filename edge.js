class Edge {
	constructor(textValue) {
		this.textValue = textValue;
		this.htmlEdge = document.createElement("button");
		this.htmlEdge.classList.add("btn");
		this.htmlEdge.innerText = this.textValue;
	}
	getHtmlElement() {
		return this.htmlEdge;
	}
	connectNode(node) {
		this.node = node;
	}
}

export { Edge };

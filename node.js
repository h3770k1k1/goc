class Node {
	constructor(textValue) {
		this.textValue = textValue;
		this.edges = [];
		this.htmlNode = document.createElement("div");
		this.htmlNode.classList.add("question-container");
		const title = document.createElement("div");
		title.classList.add("question");
		title.innerText = this.textValue;
		this.htmlNode.appendChild(title);
		this.edgesContainer = document.createElement("div");
		this.edgesContainer.classList.add("answer-buttons");
		this.htmlNode.appendChild(this.edgesContainer);
	}
	addEdge(edge) {
		this.edges.push(edge);
		this.edgesContainer.appendChild(edge.getHtmlElement());
	}
	connectNode(edge, nextNode) {
		edge.getHtmlElement().addEventListener("click", () => {
			nextNode.show();
			this.hide();
		});
	}
	hide() {
		this.htmlNode.style.display = "none";
	}
	show() {
		this.htmlNode.style.display = "flex";
	}
	getHtmlElement() {
		return this.htmlNode;
	}
}

export { Node };

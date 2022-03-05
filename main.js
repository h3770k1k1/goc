import { Node } from "./node.js";
import { DecisionTree } from "./decisionTree.js";
import { Edge } from "./edge.js";

const goodAnswers = [
	"biegnę do kota, żeby go złapać i przebiec z im na drugą strone",
	"gapię się na niego",
	"łapię go z powrotem-muszę znaleźć właściciela tego kotazanim znowu wejdzie pod auto",
];
const badAnswers = [
	"idę jak szedłem",
	"mówię-ojej biedactwo mje kochane tulituli",
	"odchodzę",
];
const questions = [
	"Wracasz do domu z zajęć, co jakiś czas przejzdza jakiś samochód. Ogólnie jest spokojnie. Nagle widzisz jak gruby biały kot wbiega na ulice...prosto pod koła ciężarówki.",
	"łapiesz kota na ręce i ledwo udaje wam się się uniknąć udeżenia przez auto, skaczesz na chodnik, wywracasz się z kotem na rękach, kot się turla kawałek dalej po czym staje a dwóch łapach i gapi się na ciebie.",
	"kot obraca się i idzie w swoją stronę, po chwili ogląda się na ciebie z pytającym wzrokiem po czym odbiega",
];

//const decisionTree = new DecisionTree();

const e1 = new Edge(goodAnswers[0]);
const e2 = new Edge(badAnswers[0]);
const n1 = new Node(questions[0]);
n1.addEdge(e1);
n1.addEdge(e2);

const e21 = new Edge(goodAnswers[1]);
const e22 = new Edge(badAnswers[1]);
const n2 = new Node(questions[1]);
n2.addEdge(e21);
n2.addEdge(e22);

const e31 = new Edge(goodAnswers[2]);
const e32 = new Edge(badAnswers[2]);
const n3 = new Node(questions[2]);
n3.addEdge(e31);
n3.addEdge(e32);

const lose = new Node("You lost.");
const win = new Node("You win.");

//connecting nodes
n1.connectNode(e1, n2);
n2.connectNode(e21, n3);

n1.connectNode(e2, lose);
n2.connectNode(e22, lose);
n3.connectNode(e32, lose);

n3.connectNode(e31, win);

//loading nodes to html
const nodes = [n1, n2, n3, win, lose];
for (const node of nodes) {
	document.body.appendChild(node.getHtmlElement());
}
//displaying first node
n1.getHtmlElement().style.display = "flex";

export class Model {
user;
item;

constructor(){
this.user='Berkay';
this.item=[
    new Items("Kahvaltı",false),
    new Items("Spor",true),
    new Items("Ders",false),
    new Items("Müzik",false)
]
}

}

export class Items{

    description;
    action;

    constructor(description,action){
        this.description=description;
        this.action=action;
    }
}
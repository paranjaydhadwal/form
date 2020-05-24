class Form {
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Start');
        this.greeting = createElement('h3');
        this.title = createElement('h2');
  //      this.reset=createButton('Reset');
        this.q1=createInput("Answer");
        this.q11=createElement("h4");
        this.q1button=createButton('Next Question');
        this.q2=createInput("Answer");
        this.q22=createElement("h4");
        this.q2button=createButton('Next Question');
        this.q3=createInput("Answer");
        this.q33=createElement("h4");
        this.q3button=createButton('Next Question');
        this.end=createElement('h3');
        this.quote=createElement('h3');
        this.name=createElement('h3');
    }
    display(){
      //  fill("white")
        this.title.html("A Social Cause");
        this.title.position(130, 0);
        this.input.position(130 , 150);
        this.button.position(130+50, 170+30);
        this.name.html('Please Enter your name');
        this.name.position(150-20,150-50-40+30);
       // this.reset.position(370,20);
       
        this.button.mousePressed(()=>{
            name = this.input.value();
            array1.push("Name" +" "+name);
         
        this.input.hide();
      this.button.hide();
      this.greeting.html("Welcome " + name)
      this.greeting.position(150, 50);
      this.name.hide();
          
            this.q11.html(" Q1) Are you willing to contribute 5% of your monthly earning to the poor?")
            this.q11.position(150-75-30-20-15,100);
            this.q1.position(50,150);
          
            this.q1button.position(320,150);
            this.q1button.mousePressed(()=>{
                q1a=this.q1.value();
                array1.push("Q1"+" "+q1a);
               
                this.q1.hide();
                this.q1button.hide();
                this.q11.hide();
                this.q22.html(" Q2) What are your views on helping the poor?")
                this.q22.position(150-75-30-20-15,100);
                this.q2.position(50,150);
              
                this.q2button.position(320,150);
               
             
                this.q2button.mousePressed(()=>{
                    q2a=this.q2.value();
                    array1.push("Q2"+" "+q2a);

                    this.q2.hide();
                    this.q2button.hide();
                    this.q22.hide();
                    this.q33.html(" Q3) Do you donate you groceries/Old clothes? ")
                    this.q33.position(150-75-30-20-15,100);
                    this.q3.position(50,150);
                  
                    this.q3button.position(320,150);
                 //   q3a=this.q3.value();
                    this.q3button.mousePressed(()=>{
                        q3a=this.q3.value();
                        array1.push("Q3"+" "+q3a);
                        console.log(array1);
                        this.q3.hide();
                        this.q3button.hide();
                        this.q33.hide();
                        this.end.html("Thank you for giving us your precious time "+ name);
                        this.end.position(150-75-30-20-15,100)
                        this.updateDB();
                        this.quote.html("No one has ever become poor by giving.... - Anne Frank ");
                        this.quote.position(150-75-30-20-15,200)
                    });
                });
            });
        });
        // console.log(mouseX);
        // console.log(mouseY);
        // console.log(gameState);
     
        }
    
    updateDB(){
        console.log("All OK");
        database.ref('answers').update({
            'q1':array1[0],
            'q2':array1[1],
            'q3':array1[2],
            'q4':array1[3]
        });
    }
}
    // updateState(state){
    //     gameState:state
    // }

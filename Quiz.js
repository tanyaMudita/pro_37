class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements

  /*Question.title.hide();
   Question.input1.hide();
   Question.button.hide();
   Question.input2.hide();*/

    //write code to change the background color here
    background("yellow");
    //write code to show a heading for showing the result of Quiz

    fill(0);
    textSize(30);
    text("Result Of The Quiz",290,50);

    //call getContestantInfo( ) here
    
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined

    if(allContestants !== undefined){
     
      fill(252,2,2);
      textSize(25);
      text("NOTE : Contestants who answered correct are highlighted in green color",100,230);

    
    }

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
    for(var plr in allContestants){
        var correctAns ="2";
        if(correctAns===allContestants[plr].answer){
        fill("green");
        text(contestant.name +contestant.answer,100,300);
        }
        else{
        fill("red");
        text(contestant.name +contestant.answer,100,350);
        }
    
    }

  }

}

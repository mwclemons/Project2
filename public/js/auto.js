var character = [];

module.exports = function(act) {function addCharacter() {
    $("#addcharacter").on("click", function(event) {
        event.preventDefault();

        var newCharacter = {
            character_name: $("#newCharacter").val().trim()
        };

        character.push(newCharacter);
        console.log(newCharacter);

        $.ajax("/api/character", {
            type: "POST", 
            data: newCharacter
        }).then(function() {
            console.log("Added new Character");
            // location.reload();
        });
    });

    $("#attack").on("click", function(event) {
        event.preventDefault();

        function attackSSML(conv) {
            const ssml = '<speak>' +
              'You have chosen to attack <audio src="https://actions.google.com/sounds/v1/horror/synthetic_insects.ogg"> synthetic insects  </audio>. ' +
              '</speak>';
            conv.ask(ssml);
          };

          attackSSML();        
    });


    $("#defend").on("click", function(event) {
        event.preventDefault();

        function defendSSML(conv) {
            const ssml = '<speak>' +
              'You have chosen to defend <audio src="https://actions.google.com/sounds/v1/impacts/face_hit_series.ogg"> face hitting </audio>. ' +
              '</speak>';
            conv.ask(ssml);
          };

          defendSSML();        
    });

    $("#special").on("click", function(event) {
        event.preventDefault();

        function specialSSML(conv) {
            const ssml = '<speak>' +
              'You have chosen to attack <audio src="https://actions.google.com/sounds/v1/horror/female_monster_attacking.ogg"> special attack </audio>. ' +
              '</speak>';
            conv.ask(ssml);
          }

          specialSSML();        
    });

  
};
};

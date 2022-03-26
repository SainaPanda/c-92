p1_name = localStorage.getItem("player1_name");
p2_name = localStorage.getItem("player2_name");
console.log(p1_name);
player1_score=0;
player2_score=0;
console.log(p2_name);


document.getElementById("player1_name").innerHTML = p1_name + " : ";
document.getElementById("player2_name").innerHTML = p2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + p1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + p2_name;

function send()
{
    get_num1 = document.getElementById("n1").value;
    get_num2 = document.getElementById("n2").value;
    answer = get_num1*get_num2;
    question_word= "<h4 id = 'word_display'> Q. " + get_num1 + " X " + get_num2 + "</h4>";
    input_box = "<br>Answer : <input type = 'text' id='input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(answer == get_answer)
    {
        if (answer_turn == "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score; 
        }
    }
    if (question_turn == "player1")
        {
            question_turn = "player2";
            document.getElementById("player_question").innerHTML = "Question Turn - " + p2_name;
        }
        else
        {
            question_turn = "player1";
            document.getElementById("player_question").innerHTML = "Question Turn - " + p1_name;
        }
        if (answer_turn == "player1")
        {
            answer_turn = "player2";
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + p2_name;
        }
        else
        {
            answer_turn = "player1";
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + p1_name;
        }

        document.getElementById("player_answer").innerHTML = "";
} 


console.log('external')


//opton 2 for handle event
function makePink(){
            document.body.style.backgroundColor = 'lightpink';
        }

function makeGreen(){
            document.body.style.backgroundColor = 'lightgreen';
        }


     
// option 3 : get element by id and then set onclick
const btnMakeBlue = document.getElementById('btn-make-blue');
        btnMakeBlue.onclick = function makeBlue(){
            document.body.style.backgroundColor = 'lightblue';
        }
        // console.log(btnMakeBlue)


// option 3 : different version for clicjk function
const btnMaleAqua = document.getElementById('btn-make-aqua');
        btnMaleAqua.onclick = makeAqua;
        function makeAqua(){
            document.body.style.backgroundColor = 'aqua';
        }


        



const api = 'http://10.10.10.75:8000/api/quizz/1/questions';

async function ambilData(){
    try{
        const response = await fetch(api);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        
        const data = result.data;  
        console.log('Quiz Title:', data.title_quiz);
        
        // Akses questions array
        const questions = data.questions;
        questions.forEach((question, index) => {
            console.log(`Question ${index + 1}:`, question);
        });

    } catch(e) {
        console.log('Error, data tidak bisa dipanggil..', e);
    }
}

ambilData();

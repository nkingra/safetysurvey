// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
                type: "radiogroup",
                name: "question1",
                title: "Which item below DOES NOT fall under the category of personal protective equipment?",
                choices: [
                    "Goggles", "Gloves", "Smartphone", "Mask"
                ],
                correctAnswer: "Smartphone"
            },
            {
                type: "radiogroup",
                name: "question2",
                title: "What actions should you take in the event that dangerous chemical spills occur at work?",
                choices: [
                    "Pretend like it didn't happen", "Post it on social media", "Report it to your supervisor immediately", "Clean it up yourself"
                ],
                correctAnswer: "Report it to your supervisor immediately"
            },
            {
                type: "radiogroup",
                name: "question3",
                title: "Which of the following symbols is NOT used in WHMIS to idenitfy hazards",
                choices: [
                    "Skull", "Pencil", "Flame", "Exclamation Mark"
                ],
                correctAnswer: "Pencil"
            },
            {
                type: "radiogroup",
                name: "question4",
                title: "What should you do if you are exposed to a hazardous substance in the workplace?",
                choices: [
                    "Panic and scream", "Ignore it", "Report it to your manager and seek medicial attention if needed", "Report it to your manager but do not tell them if medical attention is needed"
                ],
                correctAnswer: "Report it to your manager and seek medicial attention if needed"
            },
            {
                type: "radiogroup",
                name: "question5",
                title: "What does the WHMIS hazard symbol with an exclamation mark indicare?",
                choices: [
                    "Biohazardous", "Flammable", "Explosive", "Health Hazards"
                ],
                correctAnswer: "Health Hazards"
            },
            {
                type: "radiogroup",
                name: "question6",
                title: "What is the purpose of WHMIS training in the workplace?",
                choices: [
                    "To provide entertainment to staff members", "To give extra work to employees", "To educate employees about hazardous and safety materials", "None of the above"
                ],
                correctAnswer: "To educate employees about hazardous and safety materials"
            },
            {
                type: "radiogroup",
                name: "question7",
                title: "What is the WHMIS symbol with the flame signify?",
                choices: [
                    "Health Hazard", "Biohazard", "Fire Hazard", "Bomb"
                ],
                correctAnswer: "Fire Hazard"
            },
            {
                type: "radiogroup",
                name: "question8",
                title: "What does SDS stand for?",
                choices: [
                    "Safety Data Sheet", "Safety Design Sheet", "Safety Design Supplemental Form", "Safety Data Supplemental"
                ],
                correctAnswer: "Safety Data Sheet"
            },
            {
                type: "radiogroup",
                name: "question9",
                title: "Which of the following is a fundamental goal of workplace safety?",
                choices: [
                    "Increase production and workload", "Reduce accidents and injuries", "Ignore safety rules", "Teamwork"
                ],
                correctAnswer: "Reduce accidents and injuries"
            },
            {
                type: "radiogroup",
                name: "question10",
                title: "WHMIS stands for:",
                choices: [
                    "Workplace Hazardous Materials Information System", "Workplace Health Materials Information System", "Workplace Hazardous Management Information System", "Worksite Health Management Information System"
                ],
                correctAnswer: "Workplace Hazardous Materials Information System"
            }];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "WHMIS Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on WHMIS Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}


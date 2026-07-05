function generatePlan(){

    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    let branch = document.getElementById("branch").value;
    let year = document.getElementById("year").value;
    let interest = document.getElementById("interest").value;
    let hours = document.getElementById("hours").value;
    let result = document.getElementById("result");

    if(name === "" || type === "" || branch === "" || year === "" || interest === "" || hours === ""){
        result.style.display = "block";
        result.innerHTML = "⚠️ Please fill all fields";
        return;
    }

    let career = "";
    let internship = "";
    let studyPlan = "";

    // ---------------- STUDENT ----------------
    if(type === "student"){

        career = "Software Engineer / Core Engineer / Analyst Roles";

        if(branch === "cse"){

            internship = "Web Dev, AI/ML, Cloud, App Development";

            if(year == "1"){
                studyPlan = "Basics of Programming + Logic Building + Maths";
            }
            else if(year == "2"){
                studyPlan = "DSA + OOP + Web Basics";
            }
            else if(year == "3"){
                studyPlan = "React + Backend + Projects";
            }
            else{
                studyPlan = "Placements + Resume + Interview Prep";
            }
        }

        else if(branch === "ece"){
            internship = "Embedded Systems, IoT, Robotics";

            studyPlan = "C + Microcontrollers + IoT + Arduino Projects";
        }

        else{
            internship = "Core Industry Internships";
            studyPlan = "Core Subjects + Practical Training + Projects";
        }
    }

    // ---------------- GRADUATE ----------------
    else if(type === "graduate"){

        career = "Job Roles: Developer / Analyst / Govt Exams / Freelancing";

        if(interest === "web"){
            internship = "Frontend / Backend / Freelance Projects";

            studyPlan = `
            - HTML, CSS, JS (Daily Practice)<br>
            - React / Node.js<br>
            - 3 Real Projects<br>
            - GitHub + Resume<br>
            👉 Focus: Job Ready Portfolio
            `;
        }

        else if(interest === "ai"){
            internship = "AI/ML Internship, Data Science Projects";

            studyPlan = `
            - Python<br>
            - Machine Learning<br>
            - Kaggle Projects<br>
            - Model Building<br>
            👉 Focus: Real AI Projects
            `;
        }

        else if(interest === "data"){
            internship = "Data Analyst Internship";

            studyPlan = `
            - Excel + SQL<br>
            - Power BI<br>
            - Python Basics<br>
            👉 Focus: Data Visualization Skills
            `;
        }

        else if(interest === "cyber"){
            internship = "Cyber Security Internship";

            studyPlan = `
            - Networking Basics<br>
            - Linux<br>
            - Ethical Hacking Basics<br>
            👉 Focus: Security Tools Practice
            `;
        }

        else if(interest === "govt"){
            internship = "Government Exam Preparation";

            studyPlan = `
            - Aptitude Practice<br>
            - Reasoning<br>
            - Current Affairs<br>
            - Mock Tests<br>
            👉 Focus: SSC / Bank / Railways
            `;
        }

        else{
            internship = "Core + IT Internships";
            studyPlan = "Skill Building + Projects + Resume Preparation";
        }
    }

    result.style.display = "block";
    result.innerHTML = `
        <b>Hello ${name} 👋</b><br><br>
        <b>Category:</b> ${type}<br>
        <b>Branch:</b> ${branch}<br>
        <b>Interest:</b> ${interest}<br>
        <b>Daily Hours:</b> ${hours}<br><br>

        <b>Career Path:</b> ${career}<br><br>
        <b>Internship Domains:</b> ${internship}<br><br>

        <b>Study Plan:</b><br>${studyPlan}
    `;
}
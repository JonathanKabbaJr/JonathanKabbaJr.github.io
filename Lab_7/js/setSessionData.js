const main = document.getElementById("main");

async function getClasses() {
    debugger;
    let classId = document.getElementById('courseId').value; // Your code here

    if (typeof classId !== "undefined" & classId !== "") {

        let classURL = "https://api.umd.io/v0/courses/" + classId; // Your code here

        // YOUR CODE HERE
        const resRaw = await fetch(classURL);
        const response = await resRaw.json();
        console.log(response);
        const courseObject = {
            course_id: "ENEE380",
            name: "Electromagnetic Theory",
            dept_id: "ENEE",
            department: "Electrical & Computer Engineering",
            semester: "201501",
            credits: "3",
            grading_method: ["Regular"],
            core: [],
            gen_ed: [],
            description: "Introduction to electromagnetic...",
            relationships: {
                coreqs: [],
                prereqs: ["Prerequisite: PHYS271, PHYS270, ..."],
                restrictions: [],
                restricted_to: [],
                credit_only_granted_for: [],
                credit_granted_for: [],
                formerly: [],
                also_offered_as: []
            },
            sections: [
              "ENEE380-0101",
              "ENEE380-0102",
              "ENEE380-0103"
            ]
        };
        // Store in session storage
        sessionStorage.setItem('name', courseObject.name);
        sessionStorage.setItem('semester', courseObject.semester);
        sessionStorage.setItem('credits', courseObject.credits);
        sessionStorage.setItem('description', courseObject.description);
    }
    else {
        main.innerHTML = "No value provided";
    }
}
let formData = null;
let courseCount = 0;


function loadImage() {
    var image = document.getElementById('intro-image').files[0];
    const imageUrl = URL.createObjectURL(image);
    var text = "<img src=\"" + imageUrl + "\" >";
    document.getElementById('load-image').innerHTML = text;
}


function submitForm() {
    var image = document.getElementById('intro-image').files[0];
    const imageUrl = URL.createObjectURL(image);
    
    formData = {
        name: document.getElementById('name').value,
        mascot: document.getElementById('mascot').value,
        imageUrl: imageUrl,
        imageCaption: document.getElementById('image-caption').value,
        personalBackground: document.getElementById('personal-background').value,
        professionalBackground: document.getElementById('professional-background').value,
        academicBackground: document.getElementById('academic-background').value,
        webDev: document.getElementById('web-dev').value,
        platform: document.getElementById('platform').value,
        courses: Array.from(document.querySelectorAll('.course-input')).map((input) => input.value),
        funny: document.getElementById('funny').value,
        anything: document.getElementById('anything').value
    };
    
    document.title = `${formData.name}'s ${formData.mascot} || ITIS3135 Introduction`;
    
    const contentHTML = `
        <img src="${formData.imageUrl}" class="intro-pic" alt="${formData.imageCaption}">
        
        <h2> ${formData.name} : ${formData.mascot}</h2>
        <p>
            <ul>
                <li><strong>Personal Background:</strong> ${formData.personalBackground}</li>
                <li><strong>Professional Background:</strong> ${formData.professionalBackground}</li>
                <li><strong>Academic Background:</strong> ${formData.academicBackground}</li>
                <li><strong>Background in Web Development:</strong> ${formData.webDev}</li>
                <li><strong>Primary Computer Platform:</strong> ${formData.platform}</li>
                <li><strong>Courses I'm Taking, and Why:</strong>
                    <ul>
                        ${formData.courses.map((course) => `<li><strong>${course}</strong></li>`).join('')}
                    </ul>
                </li>
                <li><strong>Funny/Interesting Item to Remember Me by:</strong> ${formData.funny}</li>
                <li><strong>I'd Also Like to Share:</strong> ${formData.anything}</li>
            </ul>
        </p>
        <button onclick="resetPage()" class="reset-button">Reset Page</button>
    `;
    
    const main = document.querySelector('main');
    main.innerHTML = contentHTML;
}
function validateForm(event) {
    event.preventDefault(); 
    
    const requiredFields = [
        'name', 'mascot', 'intro-image', 'image-caption', 
        'personal-background', 'professional-background', 
        'academic-background', 'web-dev', 'platform', 
        'funny', 'anything'
    ];
    
    let isValid = true;
    
    requiredFields.forEach((field) => {
        const element = document.getElementById(field);
        if (!element.value.trim()) {
            element.style.borderColor = 'red';
            isValid = false;
        } else {
            element.style.borderColor = '';
        }
    });
    
    const courseInputs = document.querySelectorAll('.course-input');
    if (courseInputs.length === 0) {
        alert('Please add at least one course');
        isValid = false;
    }
    
    if (!document.getElementById('agree').checked) {
        alert('Please agree to the terms');
        isValid = false;
    }
    
    if (isValid) {
        submitForm();
    }
    
    return false; 
}


function addCourse() {
    courseCount++;
    const coursesContainer = document.createElement('div');
    coursesContainer.className = 'course-container';
    coursesContainer.innerHTML = `
        <input type="text" class="course-input" id="course-${courseCount}" placeholder="Enter course name and reason" required>
        <button type="button" onclick="deleteCourse(this.parentElement)">Delete</button>
        <br>
    `;
    
    document.getElementById('courses-container').appendChild(coursesContainer);
}

function deleteCourse(element) {
    element.remove();
}

function resetPage() {
    location.reload();
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('introform');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
    
    const addCourseButton = document.getElementById('courses');
    if (addCourseButton) {
        addCourseButton.addEventListener('click', addCourse);
    }
    
    document.getElementById('introImage').addEventListener('change', loadImage);
    
    document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('introform').reset();
        document.querySelectorAll('.course-container').forEach((container) => container.remove());
        document.querySelectorAll('input').forEach((input) => input.style.borderColor = '');
        if (document.getElementById('load-image')) {
            document.getElementById('load-image').innerHTML = '';
        }
    });
});

// Function to generate service sections
const services = [
    {
        icon: "fa-brands fa-apple fa-4x",
        title: "App Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    {
        icon: "fa-solid fa-star fa-4x",
        title: "App Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    },
    {
        icon: "fa-solid fa-lemon fa-4x",
        title: "App Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
    }
];

// Function to generate service sections
function generateServiceSections() {
    const serviceContainer = document.getElementById("service-container");
    services.forEach(service => {
        const serviceHTML = `
            <div class="col-md-4">
                <div class="main">
                    <div class="service">
                        <div class="service-logo">
                            <i class="${service.icon}"></i>
                        </div>
                        <h4>${service.title}</h4>
                        <p>${service.description}</p>
                    </div>
                    <div class="shadowOne"></div>
                    <div class="shadowTwo"></div>
                </div>
            </div>
        `;
        serviceContainer.innerHTML += serviceHTML;
    });
}

// Call the function to generate service sections
generateServiceSections();
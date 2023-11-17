function fetchPlans(duration) {
    fetch('/plan-data', { method: 'GET' })
        .then(response => response.json())
        .then(plans => displayPlans(plans, duration))
        .catch(error => console.error('Error fetching plans:', error));
}

function displayPlans(plans, duration) {
    const plansContainer = document.getElementById('plansContainer');
    plansContainer.innerHTML = ''; // Clear previous content

    const filteredPlans = duration === 'monthly' ? plans.monthly : plans.yearly;

    filteredPlans.forEach(plan => {
        const planElement = document.createElement('div');
        planElement.className = 'mb-2 p-4 border rounded';

        const titleElement = document.createElement('h3');
        titleElement.className = 'text-lg font-semibold';
        titleElement.textContent = plan.name;

        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: $${plan.price}`;

        planElement.appendChild(titleElement);
        planElement.appendChild(priceElement);

        plansContainer.appendChild(planElement);
    });
}

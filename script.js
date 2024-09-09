document.addEventListener("DOMContentLoaded", function() {
    const concepts = [
        'Containers',
        'Kubernetes',
        'CI/CD Pipelines',
        'Operator Framework',
        'Routes and Services',
        'Monitoring and Logging',
        'Security and Compliance'
    ];

    const conceptsList = document.getElementById('openshift-concepts');
    
    concepts.forEach(concept => {
        let listItem = document.createElement('li');
        listItem.textContent = concept;
        conceptsList.appendChild(listItem);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit-btn');
    const userInput = document.getElementById('user-input');
    const cards = document.querySelectorAll('.card .content');
    
    submitBtn.addEventListener('click', async () => {
        const prompt = userInput.value;
        if (!prompt) return;

        // Show loading state
        cards.forEach(card => {
            card.textContent = 'Loading...';
        });

        try {
            // Simulate API calls to different models
            // In a real implementation, you would replace these with actual API calls
            const responses = await Promise.all([
                simulateModelResponse(prompt, 'Model 1'),
                simulateModelResponse(prompt, 'Model 2'),
                simulateModelResponse(prompt, 'Model 3'),
                simulateModelResponse(prompt, 'Model 4')
            ]);

            // Update cards with responses
            cards.forEach((card, index) => {
                card.textContent = responses[index];
            });
        } catch (error) {
            console.error('Error:', error);
            cards.forEach(card => {
                card.textContent = 'Error occurred while fetching response';
            });
        }
    });
});

// Simulate API response (replace with real API calls)
function simulateModelResponse(prompt, model) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`${model} response to: ${prompt}`);
        }, Math.random() * 1000 + 500);
    });
} 
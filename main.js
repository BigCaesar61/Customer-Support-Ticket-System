//Task 2: Fetch Tickets Using Async/Await and Handle Errors

const supportTickets = document.getElementById('supportTickets');


async function displaySupportTickets(supportTickets) {
    try {
        const supportTickets = await fetch(`https://jsonplaceholder.typicode.com/posts/${supportTickets}`);
        if (!supportTickets.ok) {
            throw new Error('Failed to fecth support tickets');
        }
        //Task 3: Display Tickets Dynamically on the Page
        const tickets = await supportTickets.json();
        console.log('Tickets:', tickets);

        tickets[0].user.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `User ID: ${user.userId}, Title: ${user.title}`;
            orderList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error:', error.message);
    } finally  { //task 4: Use finally to Ensure Cleanup
        console.log('fetch completed');
    }
} 


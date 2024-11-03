//Task 2: Fetch Tickets Using Async/Await and Handle Errors

const supportTickets = document.getElementById('supportTickets');


async function displaySupportTickets(userId) {
    try {
        const customerTicket = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
        if (!customerTicket.ok) {
            throw new Error('Failed to fecth support tickets');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
} 


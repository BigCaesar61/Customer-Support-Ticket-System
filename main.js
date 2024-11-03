//Task 2: Fetch Tickets Using Async/Await and Handle Errors

const supportTickets = document.getElementById('supportTickets');


async function displaySupportTickets(supportTicketsTickets) {
    try {
        const supportTickets = await fetch(`https://jsonplaceholder.typicode.com/posts/${supportTickets}`);
        if (!supportTickets.ok) {
            throw new Error('Failed to fecth support tickets');
        }

         
        
    } catch (error) {
        console.error('Error:', error.message);
    } finally  { //task 4: Use finally to Ensure Cleanup
        console.log('fetch completed');
        

    }
} 


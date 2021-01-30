// first of all
// document.getElementById('first-increase').addEventListener('click', function () {
//     const firstInput = document.getElementById('first-count');
//     const firstCount = parseInt(firstInput.value);
//     const firstNewCount = firstCount + 1;
//     firstInput.value = firstNewCount;
//     const totalCount = firstNewCount * 150;
//     document.getElementById('subtotal').innerText = `$ ${totalCount}`;
// })
// document.getElementById('first-decrease').addEventListener('click', function () {
//     const firstInput = document.getElementById('first-count');
//     const firstCount = parseInt(firstInput.value);
//     const firstNewCount = firstCount - 1;
//     firstInput.value = firstNewCount;
//     const totalFirst = firstNewCount * 150;
//     document.getElementById('subtotal').innerText = `$ ${totalFirst}`;
// })

// document.getElementById('economy-increase').addEventListener('click', function () {
//     const economyInput = document.getElementById('economy-count');
//     const economyCount = parseInt(economyInput.value);
//     const economyNewCount = economyCount + 1;
//     economyInput.value = economyNewCount;
//     const totalEconomy = economyNewCount * 100;
//     document.getElementById('subtotal').innerText = `$ ${totalEconomy}`;
// })

// document.getElementById('economy-decrease').addEventListener('click', function () {
//     const economyInput = document.getElementById('economy-count');
//     const economyCount = parseInt(economyInput.value);
//     const economyNewCount = economyCount - 1;
//     economyInput.value = economyNewCount;
//     const totalEconomy = economyNewCount * 100;
//     document.getElementById('subtotal').innerText = `$ ${totalEconomy}`;
// })

// secondly in this way
// function handleFirst(isIncrease) {
//     const firstInput = document.getElementById('first-count');
//     const firstCount = parseInt(firstInput.value);
//     let firstNewCount = firstCount;
//     if (isIncrease == true) {
//         firstNewCount = firstCount + 1;
//     } else if (isIncrease == false && firstCount > 0) {
//         firstNewCount = firstCount - 1;
//     }
//     firstInput.value = firstNewCount;
//     const totalFirst = firstNewCount * 150;
//     document.getElementById('subtotal').innerText = `$ ${totalFirst}`;
// }


// function handleEconomy(isIncrease) {
//     const economyInput = document.getElementById('economy-count');
//     const economyCount = parseInt(economyInput.value);
//     let economyNewCount = economyCount;
//     if (isIncrease == true) {
//         economyNewCount = economyCount + 1;
//     } else if (isIncrease == false && economyCount > 0) {
//         economyNewCount = economyCount - 1;
//     }
//     economyInput.value = economyNewCount;
//     const totalEconomy = economyNewCount * 100;
//     document.getElementById('subtotal').innerText = `$ ${totalEconomy}`;
// }


// finaly in this way

function handleTicket(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    } else if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;

    let ticketPrice = 0;
    if (ticket == 'first') {
        ticketPrice = ticketNewCount * 150;
    } else if (ticket == 'economy') {
        ticketPrice = ticketNewCount * 100;
    }

    document.getElementById('subtotal').innerText = `$ ${ticketPrice}`;
    calculateSubTotal()
}

// const firstInput = document.getElementById('first-count');
// const firstCount = parseInt(firstInput.value);

// const economyInput = document.getElementById('economy-count');
// const economyCount = parseInt(economyInput.value);

function getInputValue(ticketInput) {
    const ticketInputValue = document.getElementById(ticketInput + '-count');
    const ticketCountValue = parseInt(ticketInputValue.value);
    return ticketCountValue;
}

// calculate this ticket
function calculateSubTotal() {
    const firstCount = getInputValue('first');
    const economyCount = getInputValue('economy');

    const subTotal = firstCount * 150 + economyCount * 100;
    document.getElementById('subtotal').innerText = `$ ${subTotal}`;

    const vat = Math.round(subTotal * .10);
    document.getElementById('vat').innerText = `$ ${vat}`;

    const total = subTotal + vat;
    document.getElementById('total').innerText = `$ ${total}`;
}
document.getElementById('btn').addEventListener('click', function () {

    // let displayNone = document.getElementsByClassName('d-none');
    // displayNone.style.display = 'none';
    // let displayBlock = document.getElementsByClassName('bokking');
    // displayBlock.style.display = 'block';


    const firstInput = document.getElementById('first-count').value;
    const enomomyInput = document.getElementById('economy-count').value;
    const empty = document.getElementById('empty');
    empty.append(`You buy ${firstInput} first-class ticket and ${enomomyInput} economy ticket from us...`);
})
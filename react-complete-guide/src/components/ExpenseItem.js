import './ExpenseItem.css'

function ExpenseItem(props) {   //props -> title , amount , date
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmout = 294.67;

    return (
    <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-tiem__description">
          <h2>{props.Title}</h2>
          <div className='expense-item__price'>${props.amount}</div> 
        </div>
    </div>
    );
}

export default ExpenseItem;





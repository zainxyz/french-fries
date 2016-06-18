var FinancialSnapshotComponent = React.createClass({
	render: function(){
		return (
			<section className="FinancialSnapshotComponent">
				<div className="assets-liabilities">
					<div className="snapshot-chart assets">
						<div className="title">
							<p>Total Assets</p>
							<p>$203,500.00</p>
						</div>	
						<div className="graph"></div>
					</div>
					<div className="snapshot-chart liabilities">
						<div className="title">
							<p>Total Liabilities</p>
							<p>$203,500.00</p>
						</div>	
						<div className="graph"></div>
					</div>
					<div className="bubble">
						<div>
							<p>Net Worth<br />(as of today)</p>
							<p>$178,500.00</p>
						</div>	
					</div>
				</div>
				<div className="cash-expenses">
					<div className="snapshot-chart cash">
						<div className="title">
							<p>Total Cash</p>
							<p>$203,500.00</p>
						</div>	
						<div className="graph"></div>
					</div>
					<div className="snapshot-chart expenses">
						<div className="title">
							<p>Total Expenses</p>
							<p>$203,500.00</p>
						</div>	
						<div className="graph"></div>
					</div>
					<div className="bubble">
						<div>
							<p>Net Cash Flow</p>
							<p>$63,638.00</p>
						</div>	
					</div>
				</div>
			</section>
		);
	}
});

// ReactDOM.render(
//     <FinancialSnapshotComponent />,
//     document.getElementById('financial_snapshot')
// );
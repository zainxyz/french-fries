var FinancialSnapshotComponent = React.createClass({
	render: function(){
		return (
			<section className = "financial-snapshot">
				<div className = "assets-liabilities">
					<div className = "assets">
						<span>Total Assets</span>
						<span>$203,500.00</span>
					</div>
					<div className = "liabilities">
						<span>Total Liabilities</span>
						<span>$203,500.00</span>
					</div>
				</div>
				<div className = "cash-expenses">
					<div className = "cash">
						<span>Total Cash</span>
						<span>$203,500.00</span>
					</div>
					<div className = "expenses">
						<span>Total Expenses</span>
						<span>$203,500.00</span>
					</div>
				</div>
			</section>
		);
	}
});
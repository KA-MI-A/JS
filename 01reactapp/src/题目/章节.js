//列表卡片
var ul_card = React.createClass({
	displayName: "ul_card",
	propTypes: {
		ul_type: React.PropTypes.string,
		ul_head: React.PropTypes.string,
		ul_li_items: React.PropTypes.arrayOf(React.PropTypes.String)
	},
	getInitialState: function getInitialState() {
		return {
			ul_head: this.props.ul_head,//接收章节名
			ul_type: this.props.ul_type,//接收章节类型，红色重要，绿色等
			ul_li_items: this.props.ul_li_items//接收小结，数组
		};
	},
	render: function() {
		return React.createElement(
			"div", {
				className: "container"
			},
			React.createElement(
				"div", {
					className: this.props.ul_type
				},
				React.createElement(
					"small",
					null,
					this.props.ul_head
				)
			),
			React.createElement(
				"ul", {
					className: "list-group"
				},//循环渲染小结
				this.props.ul_li_items.map(function(row, rowid) {
					return React.createElement(
						"li", {
							className: "list-group-item",
							key: rowid
						},
						row
					);
				})
			)
		);
	}
});

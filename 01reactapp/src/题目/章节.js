/* eslint-disable no-undef */
//列表卡片
// eslint-disable-next-line no-undef
// eslint-disable-next-line no-unused-vars
var ul_card = React.createClass({
	displayName: "ul_card",
	propTypes: {
		// eslint-disable-next-line no-undef
		ul_type: React.PropTypes.string,
		// eslint-disable-next-line no-undef
		ul_head: React.PropTypes.string,
		// eslint-disable-next-line no-undef
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
		// eslint-disable-next-line no-undef
		return React.createElement(
			"div", {
				className: "container"
			},
			// eslint-disable-next-line no-undef
			React.createElement(
				"div", {
					className: this.props.ul_type
				},
				// eslint-disable-next-line no-undef
				React.createElement(
					"small",
					null,
					this.props.ul_head
				)
			),
			// eslint-disable-next-line no-undef
			React.createElement(
				"ul", {
					className: "list-group"
				},//循环渲染小结
				this.props.ul_li_items.map(function(row, rowid) {
					// eslint-disable-next-line no-undef
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

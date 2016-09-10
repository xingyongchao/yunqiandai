	var JPlaceHolder = {
		//检测
		_check: function() {
			return 'placeholder' in document.createElement('input');
		},
		//初始化
		init: function() {
			if (!this._check()) {
				this.fix();
			}
		},
		//修复
		fix: function() {
			jQuery(':input[placeholder]').each(function(index, element) {
				var self = $(this),
					txt = self.attr('placeholder');
				self.wrap($('<div></div>').css({
					position: 'relative',
					float: 'left',
					zoom: '1',
					border: 'none',
					background: 'none',
					padding: 'none',
					margin: 'none'
				}));
				var pos = self.position(),
					h = self.outerHeight(true),
					paddingleft = self.css('padding-left'),
					paddingright = parseInt(self.css('padding-right'))+5,
					paddingtop = self.css('padding-top'),
					left = self.css('margin-left'),
					top = self.css('margin-top');
				var holder = $('<span></span>').text(txt).css({
					position: 'absolute',
					left: left,
					top: top,
					height: h,
					// lineHeight: h+"px",
					paddingLeft: paddingleft,
					paddingRight: paddingright+"px",
					paddingTop:paddingtop,
					color: '#aaa'
				}).appendTo(self.parent());
				self.focusin(function(e) {
					holder.hide();
				}).focusout(function(e) {
					if (!self.val()) {
						holder.show();
					}
				});
				holder.click(function(e) {
					holder.hide();
					self.focus();
				});
			});
		}
	};
	//执行
	jQuery(function() {
		JPlaceHolder.init();
	});
var html = "";
			function refreshDown() {
				setTimeout(function(){
					
				
				for(var i = 0; i < 3; i++) {
					var lis = document.createElement("li");
					lis.innerHTML =`
					<li>
						<div class="one">
							<a href="">
								<h3><三亚亚龙湾3-5日自由行（5冠）>亚龙湾维景酒店豪华阳台房+接机服务..</h3>
								<p>
									产品亮点
									三亚亚龙湾维景国际度假酒店豪华标准房2晚（59平带阳台）！
									特别赠送价值300元的亚龙湾环球城酒店海南传说餐2人一次！
								</p>
							</a>
						</div>
					</li>
					<li>
						<div class="three">
							<a href="">
								<h3><三亚亚龙湾3-5日自由行（5冠）>亚龙湾维景酒店豪华阳台房+接机服务..</h3>
								<p>
									畅享挂牌准五星品质，宽敞翠景阳台，Spa级浴室！
									每日双人豪华中西式丰盛自助早餐！
								</p>
							</a>
						</div>
					</li>`;
					mui(".table-view")[0].insertBefore(lis,mui(".table-view")[0].firstChild);
					
				}
				//停止刷新
				mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
				},2000)
			}
			function refreshUp() {
				setTimeout(function(){
					
				
				for(var i = 0; i < 3; i++) {
					var lis = document.createElement("li");
					lis.innerHTML =`
					<li>
						<div class="one">
							<a href="">
								<h3><三亚亚龙湾3-5日自由行（5冠）>亚龙湾维景酒店豪华阳台房+接机服务..</h3>
								<p>
									产品亮点
									三亚亚龙湾维景国际度假酒店豪华标准房2晚（59平带阳台）！
									特别赠送价值300元的亚龙湾环球城酒店海南传说餐2人一次！
								</p>
							</a>
						</div>
					</li>
					<li>
						<div class="three">
							<a href="">
								<h3><三亚亚龙湾3-5日自由行（5冠）>亚龙湾维景酒店豪华阳台房+接机服务..</h3>
								<p>
									畅享挂牌准五星品质，宽敞翠景阳台，Spa级浴室！
									每日双人豪华中西式丰盛自助早餐！
								</p>
							</a>
						</div>
					</li>`;
					mui(".mui-table-view")[0].appendChild(lis);
					
				}
				//停止刷新
				mui('#refreshContainer').pullRefresh().endPullupToRefresh();
				},2000)
			}
			
mui.init({
				pullRefresh: {
					container: "#refreshContainer", //下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
					down: {
						contentdown: "下拉可以刷新", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
						contentover: "释放立即刷新", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
						contentrefresh: "正在刷新...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
						callback: refreshDown //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
					},
					up:{
						contentdown: "下拉可以加载", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
						contentover: "释放立即加载", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
						contentrefresh: "正在加载...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
						callback: refreshUp //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
					}
				}
			})
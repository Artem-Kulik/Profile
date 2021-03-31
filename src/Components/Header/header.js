import "../css/style.css"
import "../css/bootstrap.css"

function Header() {
	return (
		<body>
			<div class="banner" id="home">
				<div class="container">
					<div class="top-header row">
						<script src="js/classie.js"></script>
						<div class="logo">
							<a href="index.html"><a className="logo" alt="" /></a>
						</div>
						<div class="top-nav">
							<div class="nav-icon">
								<a href="#" class="right_bt" id="activator"><span> </span> </a>
							</div>
							<div class="box" id="box">
								<div class="box_content">
									<div class="box_content_center">
										<div class="form_content">
											<div class="menu_box_list">
												<ul>
													<li><a class="scroll" href="#home"><span>home</span></a></li>
													<li><a class="scroll" href="#about"><span>about</span></a></li>
												</ul>
											</div>
											<a class="boxclose" id="boxclose"> <span> </span></a>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="clearfix"> </div>
					</div>
					<div class="banner-info">
						<div class="banner-left">
							<img class="s" alt="" />
						</div>
						<div class="banner-right">
							<h1>I’M ARTEM</h1>
							<div class="border"></div>
							<h2>BG developer</h2>
							<a class="scroll" href="#about">VISIT MY RESUME</a>
							<h2>0:01</h2>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>

			<div class="about text-center" id="about">
				<div class="container">
					<h3>ABOUT ME</h3>
					<p>Some info about me</p>
					<ul>
						<li><a class="fb" href="#"></a></li>
						<li><a class="twit" href="#"></a></li>
						<li><a class="in" href="#"></a></li>
						<li><a class="goog" href="#"></a></li>
					</ul>
				</div>
			</div>

			<div class="about-back"></div>

			<div class="my-skills text-center">
				<div class="container">
					<h3>MY SKILLS</h3>
					<div class="skill-grids">
						<div class="col-md-2 skills-grid text-center">
							<div class="circle" id="circles-1"></div>
							<p>Photography</p>
						</div>
						<div class="col-md-2 skills-grid text-center">
							<div class="circle" id="circles-2"></div>
							<p>Photoshop</p>
						</div>
						<div class="col-md-2 skills-grid text-center">
							<div class="circle" id="circles-3"></div>
							<p>Light room</p>
						</div>
						<div class="col-md-2 skills-grid text-center">
							<div class="circle" id="circles-4"></div>
							<p>PicsArt</p>
						</div>
						<div class="col-md-2 skills-grid text-center">
							<div class="circle" id="circles-5"></div>
							<p>Lumii / Snapseed</p>
						</div>
						<div class="col-md-2 skills-grid text-center">
							<div class="circle" id="circles-6"></div>
							<p>Html 5 / CSS 3</p>
						</div>
						<div class="clearfix"> </div>
						<script type="text/javascript" src="js/circles.js"></script>
					</div>
				</div>
			</div>

			<div class="footer">
				<div class="container">
					<p>♥ ♥ ♥ ~ Arti_VVl ~ ♥ ♥ ♥</p>
				</div>
			</div>
		</body>
	)
}
export default Header;
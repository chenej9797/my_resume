
const lang_btn = document.querySelector('.languages');
const Title = document.querySelectorAll('.title');
const Name = document.querySelector('.name');
const Career = document.querySelector('.career');
const About_me = document.querySelector('.about_me');
const Portfolio = document.querySelector('.portfolio');
const Experience = document.querySelector('.experience');
const Exhibitions = document.querySelector('.exhibitions');
const F2e = document.querySelector('.f2e .id');
const Visual = document.querySelector('.visual .id');
const Branding = document.querySelector('.branding .id');
let btn_status = 'lang_zh';

function lang_toggle(lang) {
	if (btn_status === 'lang_zh') {
		btn_status = 'lang_en';
		lang_btn.classList.add('lang_toggle');
		Title.forEach(title => { title.classList.add('title_toggle');});
		Name.innerHTML=window.I18N.en.name;
		Career.innerHTML=window.I18N.en.career;
		About_me.innerHTML=window.I18N.en.about_me;
		Portfolio.innerHTML=window.I18N.en.portfolio;
		Experience.innerHTML=window.I18N.en.experience;
		Exhibitions.innerHTML=window.I18N.en.exhibitions;
		F2e.innerHTML=window.I18N.en.f2e;
		Visual.innerHTML=window.I18N.en.visual;
		Branding.innerHTML=window.I18N.en.branding;
	} else {
		btn_status = 'lang_zh';
		lang_btn.classList.remove('lang_toggle');
		Title.forEach(title => { title.classList.remove('title_toggle');});
		Name.innerHTML=window.I18N.zh.name;
		Career.innerHTML=window.I18N.zh.career;
		About_me.innerHTML=window.I18N.zh.about_me;
		Portfolio.innerHTML=window.I18N.zh.portfolio;
		Experience.innerHTML=window.I18N.zh.experience;
		Exhibitions.innerHTML=window.I18N.zh.exhibitions;
		F2e.innerHTML=window.I18N.zh.f2e;
		Visual.innerHTML=window.I18N.zh.visual;
		Branding.innerHTML=window.I18N.zh.branding;
	}
	console.log(btn_status);
}

lang_btn.addEventListener('click', lang_toggle);
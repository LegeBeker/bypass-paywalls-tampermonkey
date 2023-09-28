// ==UserScript==
// @name         Bypass Paywalls
// @description  A way to bypass paywalls for popular news sites
// @author       LegeBeker (https://github.com/LegeBeker), (Fork from https://github.com/iamadamdev/bypass-paywalls-chrome)
// @namespace    https://github.com/LegeBeker/bypass-paywalls-tampermonkey/
// @supportURL   https://github.com/LegeBeker/bypass-paywalls-tampermonkey/issues
// @updateURL    https://github.com/LegeBeker/bypass-paywalls-tampermonkey/raw/master/bypass-paywalls-tampermonkey.user.js
// @downloadURL  https://github.com/LegeBeker/bypass-paywalls-tampermonkey/raw/master/bypass-paywalls-tampermonkey.user.js
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkBhAPLAM1PCwiAAABZ0lEQVR42u3aPUoDURiG0bsBU6W2UKLrMQoWrkIY3Yu9INhaBldidBNGrJLXQhS9MYU4guM9TzkzCdyT+flIUookSZIkSVJV/nkAAAAAAABAywC9iw1srgEAAAAAAAAAbF7gd/f3PZn99vsBAAAAAAAAAPoD+PFgMvRBCAAAAAAAAADQG0DzgxAAAAAAAADg+wCTIAAAAAAAAOD/AX4ZAgAAAAAAAP4QwNACAAAAAAAAABiEAAAAAAAAAAAGIQAAmgdYVFu2Ph0+qvYuBr78ej2PJffVpoNPLzis9j4MHKBez7zktt6U8fvh48yrvTeDXv76emYl52uPznmmGWWUw7WzIzkd8Mn/1Xq6kv2s0mrLTEopuWoW4PL15NjNU5PLX2Tn7fqYNngZrHL88RZx1hjBKl19lzxq6EJ4zslXD4rtXGTZwGd/nd3NT8u9dJnlbm1A/g+3vLvM0mVSJEmSJEmSJElSo70AqgAJADOYlfQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDYtMTZUMTU6NDM6NTcrMDA6MDAT/mVIAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA2LTE2VDE1OjQzOjU3KzAwOjAwYqPd9AAAAABJRU5ErkJggg==
// @run-at       document-end
// @version      0.1.2
// @match        *://*.adweek.com/*
// @match        *://*.ad.nl/*
// @match        *://*.americanbanker.com/*
// @match        *://*.ambito.com/*
// @match        *://*.baltimoresun.com/*
// @match        *://*.barrons.com/*
// @match        *://*.bloombergquint.com/*
// @match        *://*.bloomberg.com/*
// @match        *://*.bndestem.nl/*
// @match        *://*.bostonglobe.com/*
// @match        *://*.bd.nl/*
// @match        *://*.brisbanetimes.com.au/*
// @match        *://*.businessinsider.com/*
// @match        *://*.caixinglobal.com/*
// @match        *://*.centralwesterndaily.com.au/*
// @match        *://*.acs.org/*
// @match        *://*.chicagotribune.com/*
// @match        *://*.corriere.it/*
// @match        *://*.chicagobusiness.com/*
// @match        *://*.dailypress.com/*
// @match        *://*.gelderlander.nl/*
// @match        *://*.groene.nl/*
// @match        *://*.destentor.nl/*
// @match        *://*.speld.nl/*
// @match        *://*.tijd.be/*
// @match        *://*.volkskrant.nl/*
// @match        *://*.demorgen.be/*
// @match        *://*.denverpost.com/*
// @match        *://*.df.cl/*
// @match        *://*.editorialedomani.it/*
// @match        *://*.dynamed.com/*
// @match        *://*.ed.nl/*
// @match        *://*.elmercurio.com/*
// @match        *://*.elpais.com/*
// @match        *://*.elperiodico.com/*
// @match        *://*.elu24.ee/*
// @match        *://*.britannica.com/*
// @match        *://*.estadao.com.br/*
// @match        *://*.examiner.com.au/*
// @match        *://*.expansion.com/*
// @match        *://*.fnlondon.com/*
// @match        *://*.financialpost.com/*
// @match        *://*.ft.com/*
// @match        *://*.firstthings.com/*
// @match        *://*.foreignpolicy.com/*
// @match        *://*.fortune.com/*
// @match        *://*.genomeweb.com/*
// @match        *://*.glassdoor.com/*
// @match        *://*.globes.co.il/*
// @match        *://*.grubstreet.com/*
// @match        *://*.haaretz.co.il/*
// @match        *://*.haaretz.com/*
// @match        *://*.handelsblatt.com/*
// @match        *://*.harpers.org/*
// @match        *://*.courant.com/*
// @match        *://*.hbr.org/*
// @match        *://*.heraldsun.com.au/*
// @match        *://*.fd.nl/*
// @match        *://*.historyextra.com/*
// @match        *://*.humo.be/*
// @match        *://*.ilmanifesto.it/*
// @match        *://*.inc.com/*
// @match        *://*.interest.co.nz/*
// @match        *://*.investorschronicle.co.uk/*
// @match        *://*.lecho.be/*
// @match        *://*.labusinessjournal.com/*
// @match        *://*.lanacion.com.ar/*
// @match        *://*.repubblica.it/*
// @match        *://*.lastampa.it/*
// @match        *://*.latercera.com/*
// @match        *://*.lavoixdunord.fr/*
// @match        *://*.ledevoir.com/*
// @match        *://*.leparisien.fr/*
// @match        *://*.lesechos.fr/*
// @match        *://*.loebclassics.com/*
// @match        *://*.lrb.co.uk/*
// @match        *://*.latimes.com/*
// @match        *://*.mit.edu/*
// @match        *://*.technologyreview.com/*
// @match        *://*.medium.com/*
// @match        *://*.medscape.com/*
// @match        *://*.mexiconewsdaily.com/*
// @match        *://*.mv-voice.com/*
// @match        *://*.nationalgeographic.com/*
// @match        *://*.nydailynews.com/*
// @match        *://*.nrc.nl/*
// @match        *://*.ntnews.com.au/*
// @match        *://*.nationalpost.com/*
// @match        *://*.nzz.ch/*
// @match        *://*.nymag.com/*
// @match        *://*.nzherald.co.nz/*
// @match        *://*.ocregister.com/*
// @match        *://*.orlandosentinel.com/*
// @match        *://*.pzc.nl/*
// @match        *://*.paloaltoonline.com/*
// @match        *://*.parool.nl/*
// @match        *://*.postimees.ee/*
// @match        *://*.qz.com/*
// @match        *://*.quora.com/*
// @match        *://*.gelocal.it/*
// @match        *://*.republic.ru/*
// @match        *://*.reuters.com/*
// @match        *://*.sandiegouniontribune.com/*
// @match        *://*.sfchronicle.com/*
// @match        *://*.scientificamerican.com/*
// @match        *://*.seekingalpha.com/*
// @match        *://*.slate.com/*
// @match        *://*.sofrep.com/*
// @match        *://*.statista.com/*
// @match        *://*.startribune.com/*
// @match        *://*.stuff.co.nz/*
// @match        *://*.sun-sentinel.com/*
// @match        *://*.techinasia.com/*
// @match        *://*.telegraaf.nl/*
// @match        *://*.adelaidenow.com.au/*
// @match        *://*.theadvocate.com.au/*
// @match        *://*.theage.com.au/*
// @match        *://*.the-american-interest.com/*
// @match        *://*.theathletic.com/*
// @match        *://*.theathletic.co.uk/*
// @match        *://*.theatlantic.com/*
// @match        *://*.afr.com/*
// @match        *://*.theaustralian.com.au/*
// @match        *://*.bizjournals.com/*
// @match        *://*.canberratimes.com.au/*
// @match        *://*.thecourier.com.au/*
// @match        *://*.couriermail.com.au/*
// @match        *://*.thecut.com/*
// @match        *://*.dailytelegraph.com.au/*
// @match        *://*.thediplomat.com/*
// @match        *://*.economist.com/*
// @match        *://*.theglobeandmail.com/*
// @match        *://*.theherald.com.au/*
// @match        *://*.thehindu.com/*
// @match        *://*.irishtimes.com/*
// @match        *://*.kansascity.com/*
// @match        *://*.mercurynews.com/*
// @match        *://*.themercury.com.au/*
// @match        *://*.mcall.com/*
// @match        *://*.thenation.com/*
// @match        *://*.thenational.scot/*
// @match        *://*.newstatesman.com/*
// @match        *://*.nytimes.com/*
// @match        *://*.newyorker.com/*
// @match        *://*.news-gazette.com/*
// @match        *://*.theolivepress.es/*
// @match        *://*.inquirer.com/*
// @match        *://*.thesaturdaypaper.com.au/*
// @match        *://*.seattletimes.com/*
// @match        *://*.spectator.com.au/*
// @match        *://*.spectator.co.uk/*
// @match        *://*.smh.com.au/*
// @match        *://*.telegraph.co.uk/*
// @match        *://*.thestar.com/*
// @match        *://*.wsj.com/*
// @match        *://*.washingtonpost.com/*
// @match        *://*.thewrap.com/*
// @match        *://*.themarker.com/*
// @match        *://*.the-tls.co.uk/*
// @match        *://*.towardsdatascience.com/*
// @match        *://*.trouw.nl/*
// @match        *://*.tubantia.nl/*
// @match        *://*.vanityfair.com/*
// @match        *://*.vn.nl/*
// @match        *://*.vulture.com/*
// @match        *://*.journalnow.com/*
// @match        *://*.wired.com/*
// @match        *://*.worldpoliticsreview.com/*
// @match        *://*.zeit.de/*
// ==/UserScript==

(function () {
    'use strict';

    if (!matchDomain(['seekingalpha.com', 'sfchronicle.com', 'cen.acs.org', 'elmundo.es', 'scmp.com', 'nytimes.com'])) {
        window.localStorage.clear();
    }

    if (matchDomain('elmercurio.com')) {
        if (window.location.href.toLowerCase().includes('/inversiones/')) {
            document.addEventListener('DOMContentLoaded', () => {
                const paywall = document.querySelector('#modal_limit_articulos');
                const body = document.querySelector('body');
                removeDOMElement(paywall);
                if (body.hasAttribute('class')) { body.removeAttribute('class'); }
            });
        }
    } else if (matchDomain('estadao.com.br')) {
        setTimeout(function () {
            const paywall = document.querySelector('#paywall-wrapper-iframe-estadao');
            const body = document.querySelector('html');

            removeDOMElement(paywall);
            body.removeAttribute('style');
        }, 300); // Delay (in milliseconds)
    } else if (matchDomain('rep.repubblica.it')) {
        window.setTimeout(function () {
            if (window.location.href.includes('/pwa/')) {
                window.location.href = window.location.href.replace('/pwa/', '/ws/detail/');
            }
        }, 500);
        if (window.location.href.includes('/ws/detail/')) {
            const paywall = document.querySelector('.paywall');
            if (paywall) {
                ampUnhideSubscriptionsSection();
            }
        }
    } else if (matchDomain('americanbanker.com')) {
        const inlineGate = document.querySelector('.inline-gate');
        if (inlineGate) {
            inlineGate.classList.remove('inline-gate');
            const inlineGated = document.querySelectorAll('.inline-gated');
            for (const elem of inlineGated) { elem.classList.remove('inline-gated'); }
        }
    } else if (matchDomain('telegraaf.nl')) {
        if (window.location.href.startsWith('https://www.telegraaf.nl/error?ref=/')) {
            window.location.href = window.location.href.split('&')[0].replace('error?ref=/', '');
        }
        const articleWrapper = document.querySelector('.ArticlePageWrapper__uid');
        const spotXBanner = document.querySelector('.ArticleBodyBlocks__inlineArticleSpotXBanner');
        const paywall = document.querySelector('.PopupBackdrop__block');
        removeDOMElement(spotXBanner, paywall);
        const premium = document.querySelector('.PremiumLabelWithLine__body');
        const articleId = articleWrapper ? articleWrapper.innerText : '123';
        const articleBodyDone = document.querySelector('#articleBody' + articleId);
        if (premium && !articleBodyDone) {
            const articleBodyOld = document.querySelector('[id^=articleBody]');
            removeDOMElement(articleBodyOld);
            const json = document.querySelector('script[type="application/ld+json"][data-react-helmet="true"]');
            if (json) {
                const jsonText = JSON.parse(json.text).articleBody;
                const articleBody = document.querySelector('section.TextArticlePage__bodyText');
                if (articleBody) {
                    const divMain = document.createElement('div');
                    divMain.setAttribute('id', 'articleBody' + articleId);
                    const divElem = document.createElement('div');
                    divElem.setAttribute('data-element', 'articleBodyBlocks');
                    const textArray = jsonText.split('\n\n');
                    textArray.forEach(pText => {
                        const pDiv = document.createElement('p');
                        pDiv.setAttribute('class', 'ArticleBodyBlocks__paragraph ArticleBodyBlocks__paragraph--nieuws');
                        pDiv.innerText = pText;
                        divElem.appendChild(pDiv);
                    });
                    divMain.appendChild(divElem);
                    articleBody.appendChild(divMain);
                }
            }
        }
    } else if (matchDomain('nrc.nl')) {
        const paywall = document.querySelector('.paywall--topbanner');
        removeDOMElement(paywall);
    } else if (matchDomain('washingtonpost.com')) {
        const leaderboard = document.querySelector('#leaderboard-wrapper');
        const adverts = document.querySelectorAll('div[data-qa="article-body-ad"]');
        const softwall = document.querySelector('[id^="softwall"]');
        removeDOMElement(leaderboard, softwall, ...adverts);
        if (window.location.href.includes('/gdpr-consent/')) {
            const freeButton = document.querySelector('.gdpr-consent-container .continue-btn.button.free');
            if (freeButton) { freeButton.click(); }
            window.setTimeout(function () {
                const gdprcheckbox = document.querySelector('.gdpr-consent-container .consent-page:not(.hide) #agree');
                if (gdprcheckbox) {
                    gdprcheckbox.checked = true;
                    gdprcheckbox.dispatchEvent(new Event('change'));
                    document.querySelector('.gdpr-consent-container .consent-page:not(.hide) .continue-btn.button.accept-consent').click();
                }
            }, 300); // Delay (in milliseconds)
        } else {
            const url = window.location.href;
            function main(element) {
                removeDOMElement(element);
                window.location.href = url.split('?')[0] + '?outputType=amp';
            }
            if (!url.includes('outputType=amp')) {
                waitDOMElement('div[id^="paywall-"]', 'DIV', main, false);
            } else {
                const subscriptionsSections = document.querySelectorAll('[subscriptions-section="content"]');
                for (const subscriptionsSection of subscriptionsSections) { subscriptionsSection.removeAttribute('subscriptions-section'); }
            }
        }
    } else if (matchDomain('wsj.com') && !matchDomain('cn.wsj.com')) {
        if (window.location.href.includes('/articles/')) {
            const closeButton = document.querySelector('div.close-btn[role="button"]');
            if (closeButton) { closeButton.click(); }
        }
        document.addEventListener('DOMContentLoaded', () => {
            const url = window.location.href;
            const snippet = document.querySelector('.snippet-promotion');
            const wsjPro = document.querySelector('meta[name="page.site"][content="wsjpro"]');
            if (snippet || wsjPro) {
                if (!window.location.hash) {
                    if (url.includes('?')) {
                        window.location.href = url.replace('?', '#refreshed?');
                    } else { window.location.href = url + '#refreshed'; }
                } else { window.location.href = window.location.href.replace('wsj.com', 'wsj.com/amp').replace('#refreshed', ''); }
            }
        });
    } else if (matchDomain('sloanreview.mit.edu')) {
        const readMore = document.querySelector('.btn-read-more');
        if (readMore) {
            readMore.click();
        }
    } else if (matchDomain('mexiconewsdaily.com')) {
        window.setTimeout(function () {
            const popup = document.querySelector('div.pigeon-widget-prompt');
            const cproOverlay = document.querySelector('.cpro-overlay');
            removeDOMElement(popup, cproOverlay);
        }, 500); // Delay (in milliseconds)
    } else if (matchDomain('the-american-interest.com')) {
        const counter = document.getElementById('article-counter');
        removeDOMElement(counter);
    } else if (matchDomain('nzherald.co.nz')) {
        const articleContent = document.querySelector('.article__content');
        if (articleContent) {
            const articleOffer = document.querySelector('.article-offer');
            if (articleOffer) {
                const cssSelector = articleContent.querySelectorAll('p')[5].getAttribute('class');
                const hiddenNotPars = articleContent.querySelectorAll('.' + cssSelector + ':not(p)');
                for (const hiddenNotPar of hiddenNotPars) {
                    hiddenNotPar.classList.remove(cssSelector);
                    hiddenNotPar.removeAttribute('style');
                }
                const hiddenPars = articleContent.querySelectorAll('p.' + cssSelector);
                const parser = new DOMParser();
                for (const hiddenPar of hiddenPars) {
                    const parHtml = parser.parseFromString('<div style="margin: 10px 0px; font-size: 17px">' + hiddenPar.innerHTML + '</div>', 'text/html');
                    const parDom = parHtml.querySelector('div');
                    articleContent.insertBefore(parDom, hiddenPar);
                }
                const firstSpan = document.querySelector('p > span');
                if (firstSpan) { firstSpan.removeAttribute('class'); }
                removeDOMElement(articleOffer);
            }
        }
        const premiumToaster = document.querySelector('#premium-toaster');
        removeDOMElement(premiumToaster);
    } else if (matchDomain('interest.co.nz')) {
        const wrapper = document.getElementById('pp-ablock-banner-wrapper');
        const overlay = document.querySelector('.black-overlay');
        removeDOMElement(overlay, wrapper);
    } else if (matchDomain('stuff.co.nz')) {
        const overlay = document.querySelector('.x0');
        removeDOMElement(overlay);
    } else if (matchDomain('thenational.scot')) {
        const overlay = document.querySelector('.template-container');
        removeDOMElement(overlay);
    } else if (matchDomain('thestar.com')) {
        setTimeout(function () {
            const paywall = document.querySelector('.basic-paywall-new');
            removeDOMElement(paywall);
            const tbc = document.querySelectorAll('.text-block-container');
            for (const el of tbc) {
                el.removeAttribute('style');
            }
        }, 1000); // Delay (in milliseconds)
    } else if (matchDomain('afr.com')) {
        document.addEventListener('DOMContentLoaded', () => {
            const hiddenImage = document.querySelectorAll('img');
            for (const image of hiddenImage) {
                const src = image.src;
                if ('src: ' + src.indexOf('.gif') !== -1) {
                    const dataSrc = image.getAttribute('data-src');
                    if (dataSrc) {
                        image.setAttribute('src', dataSrc);
                    }
                }
            }
            const plista = document.querySelector('div[data-plista-placement="underArticle_Group"]');
            removeDOMElement(plista);
        });
    } else if (matchDomain(['parool.nl', 'trouw.nl', 'volkskrant.nl', 'demorgen.be', 'humo.be'])) {
        document.addEventListener('DOMContentLoaded', () => {
            const topBanner = document.querySelector('div[data-temptation-position="PAGE_TOP"]');
            const paywall = document.querySelector('div[data-temptation-position="ARTICLE_BOTTOM"]');
            const hiddenSection = document.querySelector('div[data-temptation-position="ARTICLE_INLINE"]');
            const overlay = document.querySelector('div[data-temptation-position="PAGE_BOTTOM"]');
            removeDOMElement(topBanner, paywall, hiddenSection, overlay);
        });
    } else if (matchDomain('firstthings.com')) {
        const paywall = document.getElementsByClassName('paywall')[0];
        removeDOMElement(paywall);
    } else if (matchDomain('bloomberg.com')) {
        blockElement('#graphics-paywall-overlay', true);
    } else if (matchDomain('bloombergquint.com')) {
        const articlesLeftModal = document.getElementsByClassName('paywall-meter-module__story-paywall-container__1UgCE')[0];
        const paywall = document.getElementById('paywallDmp');
        removeDOMElement(articlesLeftModal, paywall);
    } else if (matchDomain('medium.com') || document.querySelector('script[src^="https://cdn-client.medium.com/"]')) {
        const paywall = document.querySelector('div#paywall-background-color');
        removeDOMElement(paywall);
        if (paywall) {
            extensionApi.runtime.sendMessage({ request: 'refreshCurrentTab' });
        }
        window.setTimeout(function () {
            const meter = document.querySelector('[id*="highlight-meter-"]');
            if (meter) {
                meter.hidden = true;
            }
        }, 500); // Delay (in milliseconds)
    } else if (matchDomain('theglobeandmail.com')) {
        const articleBodySubscribed = document.querySelector('.c-article-body--subscribed');
        if (articleBodySubscribed) {
            articleBodySubscribed.removeAttribute('class');
        }
    } else if (matchDomain(['examiner.com.au', 'thecourier.com.au', 'theadvocate.com.au'])) {
        const subscribeTruncate = document.querySelector('.subscribe-truncate');
        if (subscribeTruncate) { subscribeTruncate.classList.remove('subscribe-truncate'); }
        const subscriberHider = document.querySelectorAll('.subscriber-hider');
        for (const el of subscriberHider) {
            el.classList.remove('subscriber-hider');
        }
    } else if (matchDomain('canberratimes.com.au')) {
        const paywall = document.querySelector('.subscribe-article.news-article-body.article__body');
        paywall.classList.remove('subscribe-article');
        const subscribe = document.getElementsByClassName('subscriber-container')[0];
        removeDOMElement(subscribe);
        const content = document.getElementsByClassName('subscriber-hider');
        for (const el of content) {
            el.classList.remove('subscriber-hider');
        }
    } else if (matchDomain('ledevoir.com')) {
        const counter = document.querySelector('.full.hidden-print.popup-msg');
        removeDOMElement(counter);
    } else if (matchDomain('ft.com')) {
        const cookieBanner = document.querySelector('.o-banner__outer');
        const ribbon = document.querySelector('.js-article-ribbon');
        const ads = document.querySelector('.o-ads');
        removeDOMElement(cookieBanner, ads, ribbon);
    } else if (matchDomain('thehindu.com')) {
        document.addEventListener('DOMContentLoaded', () => {
            const counter = document.querySelector('#test');
            const coBanner = document.querySelector('.co-banner');
            const support = document.querySelector('div.support-jlm');
            removeDOMElement(counter, coBanner, support);
        });
    } else if (matchDomain('nytimes.com')) {
        const banners = document.querySelectorAll('div[data-testid="inline-message"], div[id^="ad-"], div.expanded-dock, div.pz-ad-box');
        removeDOMElement(...banners);
    } else if (matchDomain('technologyreview.com')) {
        window.setTimeout(function () {
            const bodyObscured = document.querySelector('body[class*="body__obscureContent"]');
            if (bodyObscured) { removeClassesByPrefix(bodyObscured, 'body__obscureContent'); }
            const overlay = document.querySelector('div[class*="overlayFooter__wrapper"]');
            if (overlay) { overlay.setAttribute('style', 'display:none'); }
            const contentBodyHidden = document.querySelector('div[class*="contentBody__contentHidden"]');
            if (contentBodyHidden) { removeClassesByPrefix(contentBodyHidden, 'contentBody__contentHidden'); }
            const contentBodyOverlay = document.querySelector('div[class*="contentBody__overlay"]');
            if (contentBodyOverlay) { contentBodyOverlay.removeAttribute('class'); }
        }, 500);
    } else if (matchDomain('leparisien.fr')) {
        window.removeEventListener('scroll', this.scrollListener);
        const paywall = document.querySelector('.relative.piano-paywall.below_nav.sticky');
        removeDOMElement(paywall);
        setTimeout(function () {
            const content = document.getElementsByClassName('content');
            for (const el of content) {
                el.removeAttribute('style');
            }
        }, 300); // Delay (in milliseconds)
    } else if (matchDomain('caixinglobal.com')) {
        const payTips = document.querySelectorAll('.cons-pay-tip');
        for (const payTip of payTips) {
            payTip.removeAttribute('style');
        }
        const appContent = document.getElementById('appContent');
        if (appContent) {
            const pHidden = document.querySelectorAll('p:not([style="display:block;"]');
            for (const el of pHidden) {
                el.setAttribute('style', 'display:block;');
            }
        }
    } else if (matchDomain('bizjournals.com')) {
        const sheetOverlay = document.querySelector('.sheet-overlay');
        const chunkPaywall = document.querySelector('.chunk--paywall');
        removeDOMElement(sheetOverlay, chunkPaywall);
        const overlaid = document.querySelectorAll('.is-overlaid');
        for (const el of overlaid) {
            el.classList.remove('is-overlaid');
        }
        const bodyHidden = document.querySelector('.js-pre-chunks__story-body');
        bodyHidden.removeAttribute('style');
    } else if (matchDomain('the-tls.co.uk')) {
        const paywall = document.querySelector('.tls-subscriptions-banner__closed-skin');
        removeDOMElement(paywall);
    } else if (matchDomain('cen.acs.org')) {
        const paywall = document.querySelector('.meteredBar');
        removeDOMElement(paywall);
    } else if (matchDomain('elperiodico.com')) {
        setTimeout(function () {
            const unavailableArea = document.querySelector('.closed');
            const infoBox = document.querySelector('.ep-masPeriodico-info');
            if (unavailableArea) {
                unavailableArea.classList.remove('closed');
            }
            if (infoBox) {
                infoBox.parentNode.removeChild(infoBox);
            }
        }, 1000);
    } else if (matchDomain('techinasia.com')) {
        const paywall = document.querySelector('.paywall-content');
        if (paywall) {
            paywall.classList.remove('paywall-content');
        }
        const splashSubscribe = document.querySelector('.splash-subscribe');
        const paywallHard = document.querySelector('.paywall-hard');
        removeDOMElement(splashSubscribe, paywallHard);
    } else if (matchDomain('thewrap.com')) {
        const embed = document.querySelector('.embed');
        if (embed) {
            // Display feature video
            const container = document.querySelector('.featured-image-container');
            removeDOMElement(container);
            embed.classList.remove('d-none');
        }
    } else if (matchDomain('hbr.org')) {
        const banner = document.querySelector('.persistent-banner');
        removeDOMElement(banner);
    } else if (matchDomain('spectator.co.uk')) {
        const banner = document.querySelector('#subscribe-ribbon');
        removeDOMElement(banner);
    } else if (matchDomain('barrons.com')) {
        const url = window.location.href;
        if (!url.includes('barrons.com/amp/')) {
            const bodyContinuous = document.querySelector('body.is-continuous');
            const snippet = document.querySelector('meta[content="snippet"]');
            if (bodyContinuous && snippet) {
                removeDOMElement(snippet);
                window.location.href = url.replace('barrons.com', 'barrons.com/amp');
            }
            const signinLinks = document.querySelectorAll('a.primary-button--link[href*="target="]');
            for (const signinLink of signinLinks) {
                signinLink.href = decodeURIComponent(signinLink.href.split('target=')[1]).split('?')[0];
                signinLink.text = 'Click';
            }
            const barronsAds = document.querySelectorAll('.barrons-body-ad-placement');
            removeDOMElement(...barronsAds);
        } else {
            const preview = document.querySelector('section[subscriptions-section="content-not-granted"]');
            removeDOMElement(preview);
            const subscrSection = document.querySelector('section[subscriptions-section="content"]');
            if (subscrSection) {
                subscrSection.removeAttribute('subscriptions-section');
            }
        }
        removeDOMElement(document.querySelector('.login-section-container'));
    } else if (matchDomain('nzz.ch')) {
        const paywall = document.querySelector('.dynamic-regwall');
        removeDOMElement(paywall);
    } else if (matchDomain('irishtimes.com')) {
        document.addEventListener('DOMContentLoaded', () => {
            const stubArticleMsg = document.querySelector('div.stub-article-msg');
            const url = window.location.href;
            if (url.includes('mode=sample') || stubArticleMsg) { window.location.href = new URL(url).pathname + '?mode=amp'; }
        });
    } else if (matchDomain('thesaturdaypaper.com.au')) {
        const paywall = document.querySelector('div.paywall-hard-always-show');
        removeDOMElement(paywall);
    } else if (matchDomain('lesechos.fr') && window.location.href.match(/-\d{6,}/)) {
        window.setTimeout(function () {
            const aboBanner = document.querySelector('[class^="pgxf3b"]');
            const adBlocks = document.querySelectorAll('[class*="jzxvkd"');
            for (const adBlock of adBlocks) { adBlock.setAttribute('style', 'display:none'); }
            if (aboBanner) {
                removeDOMElement(aboBanner);
                const url = window.location.href;
                const html = document.documentElement.outerHTML;
                let state;
                const split1 = html.split('window.__PRELOADED_STATE__=')[1];
                const split2 = split1.split('</script>')[0].trim();
                if (split2.includes('; window.__DATA__=')) { state = split2.split('; window.__DATA__=')[0].trim(); } else { state = split2.substr(0, split2.length - 1); }
                try {
                    const data = JSON.parse(state);
                    const article = data.article.data.stripes[0].mainContent[0].data.description;
                    const urlLoaded = data.article.data.path;
                    if (!url.includes(urlLoaded)) { window.location.reload(true); }
                    const paywallNode = document.querySelector('.post-paywall');
                    if (paywallNode) {
                        const contentNode = document.createElement('div');
                        const parser = new DOMParser();
                        const articleHtml = parser.parseFromString('<div>' + article + '</div>', 'text/html');
                        const articlePar = articleHtml.querySelector('div');
                        if (articlePar) {
                            contentNode.appendChild(articlePar);
                            contentNode.className = paywallNode.className;
                            paywallNode.parentNode.insertBefore(contentNode, paywallNode);
                            removeDOMElement(paywallNode);
                            const paywallLastChildNode = document.querySelector('.post-paywall  > :last-child');
                            if (paywallLastChildNode) {
                                paywallLastChildNode.setAttribute('style', 'height: auto !important; overflow: hidden !important; max-height: none !important;');
                            }
                        }
                    }
                    const styleElem = document.head.appendChild(document.createElement('style'));
                    styleElem.innerHTML = '.post-paywall::after {height: auto !important;}';
                } catch (err) {
                    window.location.reload(true);
                }
            }
        }, 500); // Delay (in milliseconds)
    } else if (matchDomain('startribune.com')) {
        // remove active class from all elements
        document.querySelectorAll('div.ReactModalPortal').forEach(function (el) {
            removeDOMElement(el);
        });
        // Enable Scroll. Reveal Hiddlen Paragraph
        document.getElementsByTagName('body')[0].removeAttribute('class');
    } else if (matchDomain('seattletimes.com')) {
        window.setTimeout(function () {
            // remove modal class from all elements
            document.querySelectorAll('div.modal').forEach(function (el) {
                removeDOMElement(el);
            });
            // Remove Blurred Style from all matching Divs
            document.getElementById('container').removeAttribute('style');
            document.querySelectorAll('div[style~="filter"]').forEach(function (el) {
                el.removeAttribute('style');
            });
            document
                .querySelectorAll('div[class~="NewsletterSignupSplash"]')
                .forEach(function (el) {
                    el.removeAttribute('class');
                });
        }, 1000); // Delay (in milliseconds)
    } else if (matchDomain('theatlantic.com')) {
        // Remove all nudge elements
        document.querySelectorAll('div[class*="c-nudge"]').forEach(function (el) {
            removeDOMElement(el);
        });
        // Remove all FancyBox ads
        document.querySelectorAll('div[class*="fancybox"]').forEach(function (el) {
            removeDOMElement(el);
        });
    } else if (matchDomain(['theathletic.com', 'theathletic.co.uk'])) {
        window.setInterval(function () {
            const paywall = document.querySelector('#slideup-paywall');
            const darken = document.querySelector('#darken-overlay');
            if (paywall && darken) {
                removeDOMElement(paywall);
                removeDOMElement(darken);
                window.clearInterval();
            }
        }, 100);

        const styleElement = document.createElement('style');

        const cssRules = `
                .noscroll {
                 overflow: auto !important;
                 height: auto !important;
                 width: auto !important;
                 position: static !important;
                 }
            `;

        styleElement.innerHTML = cssRules;
        document.head.appendChild(styleElement);

        if (!window.location.href.includes('?amp')) {
            const paywall = document.querySelectorAll('div#paywall-container, div[subscriptions-action="subscribe"], a.headline-paywall');
            const amphtml = document.querySelector('link[rel="amphtml"]');
            if (paywall.length && amphtml) {
                removeDOMElement(...paywall);
                window.setTimeout(function () {
                    window.location.href = amphtml.href;
                }, 500);
            }
        } else {
            ampUnhideSubscriptionsSection();
            const subscriptionsActions = document.querySelectorAll('[subscriptions-actions]');
            removeDOMElement(...subscriptionsActions);
        }
    } else if (matchDomain('newyorker.com')) {
        blockElement('.paywall-bar', true);
        blockElement('.paywall-modal');
    } else if (matchDomain('vanityfair.com')) {
        const paywall = document.querySelector('.paywall-bar');
        removeDOMElement(paywall);
    } else if (matchDomain(['postimees.ee', 'elu24.ee'])) {
        setTimeout(function () {
            // Remove 'adblocker-detected' footer notification
            const adblockNotif = document.querySelector('.ad-block-notification-overlay');
            removeDOMElement(adblockNotif);
            document.body.removeAttribute('style');
        }, 800); // Delay (in milliseconds)
    } else if (matchDomain('theolivepress.es')) {
        const modalBackdrop = document.querySelector('.modal-backdrop');
        const paywall = document.querySelector('.ev-open-modal-paywall-REQUIRE_LOGIN_WITH_ENTITLEMENT');
        removeDOMElement(modalBackdrop, paywall);

        for (const clazz of ['ev-modals', 'modal-open']) {
            document.body.classList.remove(clazz);
        }
    } else if (matchDomain('themarker.com')) {
        setTimeout(function () {
            const paywall = document.querySelector('[data-test="bottomStrip"]');
            const notifications = document.querySelector('#pwSubscribePopup');
            const banner = document.querySelector('#themarker\\.com\\.billboard\\.desktop');
            const newsBanner = document.querySelector('#themarker\\.com\\.news\\.banner');
            const midBanner = document.querySelector('#themarker\\.com.headline\\.banner\\.desktop');
            const financeBanner = document.querySelector('#themarker\\.com\\.finance\\.banner');
            const topStrip = document.querySelector('[data-test="topStrip"]');
            const otherBanners = Array.from(document.querySelectorAll('[data-audtarget]'));
            removeDOMElement(paywall, notifications, banner, topStrip, midBanner, newsBanner, financeBanner, ...otherBanners);
        }, 500);
    } else if (matchDomain('haaretz.co.il')) {
        setTimeout(function () {
            const notifications = document.querySelector('#pwSubscribePopup');
            const paywall = document.querySelector('[data-test="bottomStrip"]');
            const banner = document.querySelector('#haaretz\\.co\\.il\\.billboard\\.desktop');
            const editorsBanner = document.querySelector('#haaretz\\.co\\.il\\.editors\\.banner');
            const headlinesBanner = document.querySelector('#haaretz\\.co\\.il\\.headline\\.box\\.desktop');
            const topStrip = document.querySelector('[data-test="topStrip"]');
            const otherBanners = Array.from(document.querySelectorAll('[data-audtarget]'));
            removeDOMElement(paywall, notifications, banner, editorsBanner, topStrip, headlinesBanner, ...otherBanners);
        }, 500);
    } else if (matchDomain('sueddeutsche.de')) {
        const url = window.location.href;
        document.addEventListener('DOMContentLoaded', () => {
            const offerPage = document.querySelector('div.offer-page');
            if (url.startsWith('https://www.sueddeutsche.de') && (url.includes('reduced=true') || offerPage)) { window.location.href = url.split('?')[0].replace('www.', 'amphtml.'); } else if (url.startsWith('https://sz-magazin.sueddeutsche.de')) {
                if (url.includes('reduced=true') || offerPage) { window.location.href = new URL(url).pathname + '!amp'; }
            }
        });
        window.setTimeout(function () {
            if (url.includes('!amp')) {
                const paragraphReduced = document.querySelector('.paragraph--reduced');
                if (paragraphReduced) { paragraphReduced.classList.remove('paragraph--reduced'); }
                const paragraphHidden = document.querySelectorAll('.paragraph--hidden');
                for (const parHidden of paragraphHidden) { parHidden.classList.remove('paragraph--hidden'); }
                const paragraphDynamic = document.querySelector('.paragraph--dynamic');
                if (paragraphDynamic) { paragraphDynamic.classList.remove('paragraph--dynamic'); }
                const ampOfferpage = document.querySelector('.amp-offerpage');
                removeDOMElement(ampOfferpage);
            }
        }, 500); // Delay (in milliseconds)
    } else if (matchDomain('adweek.com')) {
        const bodySingle = document.querySelector('body.single');
        const ampHtml = document.querySelector('link[rel="amphtml"]');
        if (bodySingle && ampHtml) {
            bodySingle.classList.remove('single');
            window.location.href = ampHtml.href;
        }
    } else if (matchDomain('gelocal.it')) {
        if (!window.location.href.includes('/amp/')) {
            const paywallAdagio = document.querySelector('.paywall-adagio');
            removeDOMElement(paywallAdagio);
        } else {
            const paywall = document.querySelector('div[amp-access="showContent"]');
            if (paywall) { paywall.removeAttribute('amp-access-hide'); }
            const ampAds = document.querySelectorAll('amp-ad');
            removeDOMElement(...ampAds);
        }
    } else if (matchDomain('elmundo.es')) {
        const premium = document.querySelector('.ue-c-article__premium');
        const url = window.location.href;
        if (!url.includes('/amp.' + 'elmundo.es' + '/')) {
            if (premium) {
                removeDOMElement(premium);
                window.location.href = window.location.href.replace('/www.', '/amp.');
            }
        } else {
            const paywall = document.querySelector('div[amp-access="authorized!=true"]');
            if (paywall) {
                removeDOMElement(paywall);
                const divHidden = document.querySelector('div[amp-access="authorized=true"]');
                if (divHidden) {
                    divHidden.removeAttribute('amp-access-hide');
                }
            }
            const advertising = document.querySelectorAll('.advertising, amp-embed');
            removeDOMElement(...advertising);
        }
    } else if (matchDomain('speld.nl')) {
        const paywallPopup = document.querySelector('.c-paywall-notice');
        removeDOMElement(paywallPopup);
    } else if (matchDomain('lastampa.it')) {
        const url = window.location.href;
        if (!url.includes('/amp/')) {
            const premium = document.querySelector('.paywall-adagio');
            removeDOMElement(premium);
            window.setTimeout(function () {
                if (premium) {
                    window.location.href = url.split('?')[0] + '/amp/';
                }
                const articleBody = document.querySelector('div#article-body[style]');
                if (articleBody) {
                    articleBody.removeAttribute('style');
                }
            }, 500);
        } else {
            const paywall = document.querySelector('div[id^="paywall-banner"]');
            removeDOMElement(paywall);
            const subscriptionSection = document.querySelector('[subscriptions-section="content"]');
            if (subscriptionSection) {
                subscriptionSection.removeAttribute('subscriptions-section');
                const preview = document.querySelector('div[subscriptions-section="content-not-granted"]');
                removeDOMElement(preview);
            }
            const ampAds = document.querySelectorAll('amp-ad, amp-embed');
            removeDOMElement(...ampAds);
        }
    } else if (matchDomain('time.com')) {
        const body = document.querySelector('body');
        if (body) {
            body.setAttribute('style', 'position:relative !important;');
        }
    } else if (matchDomain('expansion.com')) {
        const premium = document.querySelector('.ue-c-article__premium');
        const url = window.location.href;
        if (!url.includes('/amp.' + 'expansion.com' + '/')) {
            if (premium) {
                removeDOMElement(premium);
                window.location.href = window.location.href.replace('/www.', '/amp.');
            }
        } else {
            const paywall = document.querySelector('div[amp-access="authorized!=true"]');
            if (paywall) {
                removeDOMElement(paywall);
                const divHidden = document.querySelector('div[amp-access="authorized=true"]');
                if (divHidden) {
                    divHidden.removeAttribute('amp-access-hide');
                }
            }
            const advertising = document.querySelectorAll('.advertising, amp-embed');
            removeDOMElement(...advertising);
        }
    } else if (matchDomain('chicagobusiness.com')) {
        const body = document.querySelector('body[class]');
        if (body) {
            body.removeAttribute('class');
        }
    } else if (matchDomain('latimes.com')) {
        const paywall = document.querySelector('metering-modal');
        const incognitoWall = document.querySelector('metering-toppanel');
        if (paywall) {
            removeDOMElement(paywall);
        } else if (incognitoWall) {
            removeDOMElement(incognitoWall);
        }
        if (paywall || incognitoWall) {
            document.body.removeAttribute('style');
        }
    } else if (matchDomain('foreignpolicy.com')) {
        const contentUngated = document.querySelector('div.content-ungated');
        removeDOMElement(contentUngated);
        const contentGated = document.querySelector('div.content-gated');
        if (contentGated) {
            contentGated.classList.remove('content-gated');
        }
    } else if (matchDomain('bostonglobe.com')) {
        // Remove the portion covering the paywall
        const paywall = document.querySelector('div.meter-paywall');
        if (paywall) {
            removeDOMElement(paywall);
        }
        // Re-enable scrolling
        const body = document.querySelector('body');
        if (body) {
            document.body.removeAttribute('style');
        }
        // Click the button to reveal the rest of the article
        const buttonDiv = document.querySelector('[id="continue_button"]');
        if (buttonDiv) {
            const button = buttonDiv.querySelector('button');
            if (button) {
                button.click();
            }
        }
    } else if (matchDomain('nationalgeographic.com')) {
        // prevent modal from showing up, then remove scroll-locking, and article blur
        new window.MutationObserver(function (mutations) {
            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    if (node instanceof window.HTMLElement) {
                        if (node.matches('#fittPortal_0')) {
                            removeDOMElement(node);
                            const body = document.body;
                            body.removeAttribute('class');
                            body.removeAttribute('style');
                            body.removeAttribute('overflow');
                            const blur = document.querySelector('#natgeo-template1-frame-1-module-1 > div > div > section > article > section > div.Article__Content__Overlay--gated');
                            if (blur) removeDOMElement(blur);

                            this.disconnect(); // Stop watching for element being added after one removal
                        }
                    }
                }
            }
        }).observe(document, { subtree: true, childList: true });
    } else if (matchDomain('hbrchina.org')) {
        const hiddenDiv = document.querySelector('div#the_content');
        if (hiddenDiv) {
            hiddenDiv.removeAttribute('style');
        }
    } else if (matchDomain('scmp.com')) {
        if (window.location.href.includes('/amp.')) {
            const divHidden = document.querySelectorAll('div.article-body[amp-access][amp-access-hide]');
            for (const elem of divHidden) {
                elem.removeAttribute('amp-access-hide');
            }
            const defaultMeters = document.querySelectorAll('div.default-meter, div#archive-article-meter');
            const ads = document.querySelectorAll('amp-ad, div.ad-banner, div.advert-fly-carpet-container, div.inline-advert');
            removeDOMElement(...defaultMeters, ...ads);
        }
    } else if (matchDomain('fortune.com')) {
        const paywalledArticle = document.querySelector('.paywall.paywallActive');
        if (paywalledArticle) {
            for (const clazz of ['paywall', 'paywallActive']) {
                paywalledArticle.classList.remove(clazz);
            }
        }
    }

    function matchDomain(domains) {
        const hostname = window.location.hostname;
        if (typeof domains === 'string') { domains = [domains]; }
        return domains.some(domain => hostname === domain || hostname.endsWith('.' + domain));
    }

    function waitDOMElement(selector, tagName = '', callback, multiple = false) {
        new window.MutationObserver(function (mutations) {
            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    if (!tagName || (node.tagName === tagName)) {
                        if (node.matches(selector)) {
                            callback(node);
                            if (!multiple) { this.disconnect(); }
                        }
                    }
                }
            }
        }).observe(document, {
            subtree: true,
            childList: true
        });
    }

    function removeDOMElement(...elements) {
        for (const element of elements) {
            if (element) { element.remove(); }
        }
    }

    function removeClassesByPrefix(el, prefix) {
        for (const clazz of el.classList) {
            if (clazz.startsWith(prefix)) {
                el.classList.remove(clazz);
            }
        }
    }

    // Prevent element from being added the first time to the DOM
    function blockElement(selector, blockAlways = false) {
        new window.MutationObserver(function (mutations) {
            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    if (node instanceof window.HTMLElement) {
                        if (node.matches(selector)) {
                            removeDOMElement(node);
                            if (!blockAlways) {
                                this.disconnect(); // Stop watching for element being added after one removal
                            }
                        }
                    }
                }
            }
        }).observe(document, { subtree: true, childList: true });
    }

    function ampUnhideSubscriptionsSection(ampAdsSel = 'amp-ad, .ad') {
        const preview = document.querySelector('[subscriptions-section="content-not-granted"]');
        removeDOMElement(preview);
        const subscriptionsSection = document.querySelectorAll('[subscriptions-section="content"]');
        for (const elem of subscriptionsSection) {
            elem.removeAttribute('subscriptions-section');
        }
        const ampAds = document.querySelectorAll(ampAdsSel);
        removeDOMElement(...ampAds);
    }

    const restrictions = {
        'adweek.com': /^((?!\.adweek\.com\/(.+\/)?(amp|agencyspy|tvnewser|tvspy)\/).)*$/,
        'barrons.com': /.+\.barrons\.com\/(amp\/)?article(s)?\/.+/,
        'economist.com': /.+economist\.com\/.+\/\d{1,4}\/\d{1,2}\/\d{2}\/.+/,
        'seekingalpha.com': /.+seekingalpha\.com\/article\/.+/,
        'techinasia.com': /\.techinasia\.com\/.+/,
        'ft.com': /.+\.ft.com\/content\//,
        'nytimes.com': /^((?!\/timesmachine\.nytimes\.com\/).)*$/
    };

    // Don't remove cookies before page load
    const allowCookies = [
        'brisbanetimes.com.au',
        'canberratimes.com.au',
        'cen.acs.org',
        'demorgen.be',
        'denverpost.com',
        'examiner.com.au',
        'gelocal.it',
        'grubstreet.com',
        'harpers.org',
        'hbr.org',
        'humo.be',
        'lesechos.fr',
        'lrb.co.uk',
        'medium.com',
        'mercurynews.com',
        'newstatesman.com',
        'nrc.nl',
        'nymag.com',
        'ocregister.com',
        'parool.nl',
        'qz.com',
        'scientificamerican.com',
        'seattletimes.com',
        'seekingalpha.com',
        'sofrep.com',
        'spectator.co.uk',
        'speld.nl',
        'techinasia.com',
        'telegraaf.nl',
        'the-american-interest.com',
        'theadvocate.com.au',
        'theage.com.au',
        'theatlantic.com',
        'theaustralian.com.au',
        'thecut.com',
        'thediplomat.com',
        'themercury.com.au',
        'towardsdatascience.com',
        'trouw.nl',
        'vn.nl',
        'volkskrant.nl',
        'vulture.com',
        'nzz.ch',
        'thehindu.com',
        'financialpost.com',
        'haaretz.co.il',
        'haaretz.com',
        'themarker.com',
        'sueddeutsche.de',
        'gelocal.it',
        'elmundo.es',
        'time.com',
        'zeit.de',
        'expansion.com',
        'dailytelegraph.com.au',
        'washingtonpost.com'
    ];

    // Removes cookies after page load
    const removeCookies = [
        'bloomberg.com',
        'bloombergquint.com',
        'brisbanetimes.com.au',
        'canberratimes.com.au',
        'cen.acs.org',
        'demorgen.be',
        'denverpost.com',
        'examiner.com.au',
        'globes.co.il',
        'grubstreet.com',
        'harpers.org',
        'hbr.org',
        'humo.be',
        'lesechos.fr',
        'mercurynews.com',
        'newstatesman.com',
        'nrc.nl',
        'nymag.com',
        'ocregister.com',
        'qz.com',
        'scientificamerican.com',
        'seattletimes.com',
        'sofrep.com',
        'spectator.co.uk',
        'speld.nl',
        'telegraaf.nl',
        'theadvocate.com.au',
        'theage.com.au',
        'theatlantic.com',
        'thecut.com',
        'thediplomat.com',
        'towardsdatascience.com',
        'vn.nl',
        'vulture.com',
        'wsj.com',
        'medium.com',
        'washingtonpost.com',
        'japantimes.co.jp',
        'nytimes.com'
    ];

    // Contains remove cookie sites above plus any custom sites
    let _removeCookies = removeCookies;

    // select specific cookie(s) to hold from removeCookies domains
    const removeCookiesSelectHold = {
        'qz.com': ['gdpr'],
        'wsj.com': ['wsjregion'],
        'seattletimes.com': ['st_newsletter_splash_seen']
    };

    // select only specific cookie(s) to drop from removeCookies domains
    const removeCookiesSelectDrop = {
        'ambito.com': ['TDNotesRead'],
        'demorgen.be': ['TID_ID'],
        'fd.nl': ['socialread'],
        'humo.be': ['TID_ID'],
        'nrc.nl': ['counter'],
        'speld.nl': ['speld-paywall']
    };

    // Override User-Agent with Googlebot
    const useGoogleBotSites = [
        'adelaidenow.com.au',
        'barrons.com',
        'couriermail.com.au',
        'fd.nl',
        'genomeweb.com',
        'heraldsun.com.au',
        'lavoixdunord.fr',
        'ntnews.com.au',
        'quora.com',
        'seekingalpha.com',
        'telegraph.co.uk',
        'theaustralian.com.au',
        'themercury.com.au',
        'thenational.scot',
        'wsj.com',
        'kansascity.com',
        'republic.ru',
        'nzz.ch',
        'df.cl',
        'ft.com',
        'wired.com',
        'zeit.de'
    ];

    // Override User-Agent with Bingbot
    const useBingBot = [];

    const useMsnBot = [
        'haaretz.co.il',
        'haaretz.com',
        'themarker.com'
    ];

    // Contains google bot sites above plus any custom sites
    let _useGoogleBotSites = useGoogleBotSites;

    function setDefaultOptions() {
        extensionApi.storage.sync.set({
            sites: defaultSites
        }, function () {
            extensionApi.runtime.openOptionsPage();
        });
    }

    // Block external scripts
    const blockedRegexes = {
        'adweek.com': /.+\.lightboxcdn\.com\/.+/,
        'afr.com': /afr\.com\/assets\/vendorsReactRedux_client.+\.js/,
        'businessinsider.com': /(.+\.tinypass\.com\/.+|cdn\.onesignal\.com\/sdks\/.+\.js)/,
        'chicagotribune.com': /.+:\/\/.+\.tribdss\.com\//,
        'economist.com': /(.+\.tinypass\.com\/.+|economist\.com\/engassets\/_next\/static\/chunks\/framework.+\.js)/,
        'editorialedomani.it': /(js\.pelcro\.com\/.+|editorialedomani.it\/pelcro\.js)/,
        'foreignpolicy.com': /(cdn\.cxense\.com\/|\.tinypass\.com\/)/,
        'fortune.com': /.+\.tinypass\.com\/.+/,
        'haaretz.co.il': /haaretz\.co\.il\/htz\/js\/inter\.js/,
        'haaretz.com': /haaretz\.com\/hdc\/web\/js\/minified\/header-scripts-int.js.+/,
        'inquirer.com': /.+\.tinypass\.com\/.+/,
        'lastampa.it': /.+\.repstatic\.it\/minify\/sites\/lastampa\/.+\/config\.cache\.php\?name=social_js/,
        'lrb.co.uk': /.+\.tinypass\.com\/.+/,
        'medscape.com': /.+\.medscapestatic\.com\/.*medscape-library\.js/,
        'interest.co.nz': /(.+\.presspatron\.com.+|.+interest\.co\.nz.+pp-ablock-banner\.js)/,
        'repubblica.it': /scripts\.repubblica\.it\/pw\/pw\.js.+/,
        'spectator.co.uk': /.+\.tinypass\.com\/.+/,
        'spectator.com.au': /.+\.tinypass\.com\/.+/,
        'telegraph.co.uk': /.+telegraph\.co\.uk.+martech.+/,
        'thecourier.com.au': /.+cdn-au\.piano\.io\/api\/tinypass.+\.js/,
        'thenation.com': /thenation\.com\/.+\/paywall-script\.php/,
        'thenational.scot': /(.+\.tinypass\.com\/.+|.+thenational\.scot.+omniture\.js|.+thenational\.scot.+responsive-sync.+)/,
        'thewrap.com': /thewrap\.com\/.+\/wallkit\.js/,
        'wsj.com': /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/,
        'historyextra.com': /.+\.evolok\.net\/.+\/authorize\/.+/,
        'barrons.com': /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/,
        'irishtimes.com': /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/,
        'elmercurio.com': /(merreader\.emol\.cl\/assets\/js\/merPramV2.js|staticmer\.emol\.cl\/js\/inversiones\/PramModal.+\.js)/,
        'sloanreview.mit.edu': /(.+\.tinypass\.com\/.+|.+\.netdna-ssl\.com\/wp-content\/themes\/smr\/assets\/js\/libs\/welcome-ad\.js)/,
        'latercera.com': /.+\.cxense\.com\/+/,
        'lesechos.fr': /.+\.tinypass\.com\/.+/,
        'thehindu.com': /ajax\.cloudflare\.com\/cdn-cgi\/scripts\/.+\/cloudflare-static\/rocket-loader\.min\.js/,
        'technologyreview.com': /.+\.blueconic\.net\/.+/,
        'spectator.us': /(cdn\.cxense\.com\/.+|\.tinypass\.com\/.+)/,
        'gelocal.it': /(\.repstatic\.it\/minify\/sites\/gelocal\/.+\/config\.cache(_\d)?\.php|cdn\.ampproject\.org\/v\d\/amp-(access|ad)-.+\.js)/,
        'elmundo.es': /cdn\.ampproject\.org\/v\d\/amp-(access|ad|consent)-.+\.js/,
        'time.com': /\/time\.com\/dist\/meter-wall-client-js\..+\.js/,
        'thestar.com': /\.com\/api\/overlaydata/,
        'elpais.com': /(\.epimg\.net\/js\/.+\/(noticia|user)\.min\.js|\/elpais\.com\/arc\/subs\/p\.min\.js|cdn\.ampproject\.org\/v\d\/amp-(access|(sticky-)?ad|consent)-.+\.js)/,
        'expansion.com': /cdn\.ampproject\.org\/v\d\/amp-(access|ad|consent)-.+\.js/,
        'chicagobusiness.com': /(\.tinypass\.com\/|\.chicagobusiness\.com\/.+\/js\/js_.+\.js)/,
        'dailytelegraph.com.au': /cdn\.ampproject\.org\/v\d\/amp-(access|ad|consent)-.+\.js/,
        'theglobeandmail.com': /(\.theglobeandmail\.com\/pf\/dist\/engine\/react\.js|smartwall\.theglobeandmail\.com\/)/,
        'nytimes.com': /(\.nytimes\.com\/meter\.js|mwcm\.nyt\.com\/.+\.js|cooking\.nytimes\.com\/api\/.+\/access)/,
        'latimes.com': /(metering\.platform\.latimes\.com\/|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/,
        'theathletic.com': /cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js/,
        'japantimes.co.jp': /cdn\.cxense\.com\//,
        'scmp.com': /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/,
        'ilmessaggero.it': /(utils\.cedsdigital\.it\/js\/PaywallMeter\.js)/,
        'washingtonpost.com': /\.washingtonpost\.com\/tetro\/metering\/evaluate/
    };

    const userAgentDesktop = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
    const userAgentMobile = 'Chrome/41.0.2272.96 Mobile Safari/537.36 (compatible ; Googlebot/2.1 ; +http://www.google.com/bot.html)';
    const userAgentDesktopBingBot = 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)';
    const userAgentMobileBingBot = 'Chrome/80.0.3987.92 Mobile Safari/537.36 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)';
    const userAgentMsnBot = 'msnbot/2.0b (+http://search.msn.com/msnbot.htm)';

    let enabledSites = [];

    // Get the enabled sites
    extensionApi.storage.sync.get({
        sites: {},
        customSites: []
    }, function (items) {
        enabledSites = Object.values(items.sites).concat(items.customSites);

        // Use googlebot UA for custom sites
        _useGoogleBotSites = useGoogleBotSites.concat(items.customSites);

        // Remove cookies for custom sites
        _removeCookies = removeCookies.concat(items.customSites);

        if (extensionApi === chrome) {
            initGA();
        }
    });

    // Listen for changes to options
    extensionApi.storage.onChanged.addListener(function (changes, namespace) {
        if (changes.sites && changes.sites.newValue) {
            const sites = changes.sites.newValue;
            enabledSites = Object.values(sites);
        }
    });

    // Set and show default options on install
    extensionApi.runtime.onInstalled.addListener(function (details) {
        if (details.reason === 'install') {
            setDefaultOptions();
        } else if (details.reason === 'update') {
            // User updated extension
        }
    });

    extensionApi.tabs.onUpdated.addListener(function (tabId, info, tab) {
        updateBadge(tab);
    });
    extensionApi.tabs.onActivated.addListener(function (activeInfo) {
        extensionApi.tabs.get(activeInfo.tabId, updateBadge);
    });

    function updateBadge(activeTab) {
        if (extensionApi.runtime.lastError || !activeTab) { return; }
        const badgeText = getBadgeText(activeTab.url);
        extensionApi.browserAction.setBadgeBackgroundColor({ color: 'blue' });
        extensionApi.browserAction.setBadgeText({ text: badgeText });
    }

    function getBadgeText(currentUrl) {
        return currentUrl && isSiteEnabled({ url: currentUrl }) ? 'ON' : '';
    }

    // AMP redirect for dailytelegraph.com.au
    extensionApi.webRequest.onBeforeRequest.addListener(function (details) {
        if (!isSiteEnabled(details)) {
            return;
        }
        const updatedUrl = decodeURIComponent(details.url.split('&dest=')[1].split('&')[0]).replace('www.', 'amp.');
        return { redirectUrl: updatedUrl };
    },
        { urls: ['*://www.dailytelegraph.com.au/subscribe/*'], types: ['main_frame'] },
        ['blocking']
    );

    // nytimes.com
    extensionApi.webRequest.onHeadersReceived.addListener(function (details) {
        if (!isSiteEnabled(details)) {
            return;
        }
        let headers = details.responseHeaders;
        headers = headers.map(function (header) {
            if (header.name === 'x-frame-options') { header.value = 'SAMEORIGIN'; }
            return header;
        });
        return {
            responseHeaders: headers
        };
    }, {
        urls: ['*://*.nytimes.com/*']
    },
        ['blocking', 'responseHeaders']);

    // Disable javascript for these sites
    extensionApi.webRequest.onBeforeRequest.addListener(function (details) {
        const headerReferer = details.originUrl ? details.originUrl : details.initiator;
        if (!isSiteEnabled(details) && (!enabledSites.includes('generalpaywallbypass') || matchUrlDomain('japantimes.co.jp', headerReferer))) {
            return;
        }
        return { cancel: true };
    },
        {
            urls: [
                '*://*.newstatesman.com/*',
                '*://*.outbrain.com/*',
                '*://*.piano.io/*',
                '*://*.poool.fr/*',
                '*://*.qiota.com/*',
                '*://*.tinypass.com/*'
            ],
            types: ['script']
        },
        ['blocking']
    );

    const extraInfoSpec = ['blocking', 'requestHeaders'];
    if (Object.prototype.hasOwnProperty.call(extensionApi.webRequest.OnBeforeSendHeadersOptions, 'EXTRA_HEADERS')) {
        extraInfoSpec.push('extraHeaders');
    }

    extensionApi.webRequest.onBeforeSendHeaders.addListener(function (details) {
        let requestHeaders = details.requestHeaders;

        let headerReferer = '';
        for (const n in requestHeaders) {
            if (requestHeaders[n].name.toLowerCase() === 'referer') {
                headerReferer = requestHeaders[n].value;
                continue;
            }
        }

        // check for blocked regular expression: domain enabled, match regex, block on an internal or external regex
        const blockedDomains = Object.keys(blockedRegexes);
        const domain = matchUrlDomain(blockedDomains, headerReferer);
        if (domain && details.url.match(blockedRegexes[domain]) && isSiteEnabled({ url: headerReferer })) {
            return { cancel: true };
        }

        if (!isSiteEnabled(details) && !matchUrlDomain('cdn.ampproject.org', details.url)) {
            return;
        }

        const tabId = details.tabId;
        let useUserAgentMobile = false;
        let setReferer = false;

        // if referer exists, set it to google
        requestHeaders = requestHeaders.map(function (requestHeader) {
            if (requestHeader.name === 'Referer') {
                if (details.url.includes('cooking.nytimes.com/api/v1/users/bootstrap')) {
                    // this fixes images not being loaded on cooking.nytimes.com main page
                    // referrer has to be *nytimes.com otherwise returns 403
                    requestHeader.value = 'https://cooking.nytimes.com';
                } else if (matchUrlDomain('fd.nl', details.url)) {
                    requestHeader.value = 'https://www.facebook.com/';
                } else if (matchUrlDomain('medium.com', details.url)) {
                    requestHeader.value = 'https://t.co/x?amp=1';
                } else {
                    requestHeader.value = 'https://www.google.com/';
                }
                setReferer = true;
            }
            if (requestHeader.name === 'User-Agent') {
                useUserAgentMobile = requestHeader.value.toLowerCase().includes('mobile');
            }

            return requestHeader;
        });

        // otherwise add it
        if (!setReferer) {
            if (matchUrlDomain('fd.nl', details.url)) {
                requestHeaders.push({
                    name: 'Referer',
                    value: 'https://www.facebook.com/'
                });
            } else if (matchUrlDomain('medium.com', details.url)) {
                requestHeaders.push({
                    name: 'Referer',
                    value: 'https://t.co/x?amp=1'
                });
            } else {
                requestHeaders.push({
                    name: 'Referer',
                    value: 'https://www.google.com/'
                });
            }
        }

        // override User-Agent to use Googlebot
        const useGoogleBot = _useGoogleBotSites.some(function (item) {
            return typeof item === 'string' && matchUrlDomain(item, details.url);
        });

        if (useGoogleBot) {
            requestHeaders.push({
                name: 'User-Agent',
                value: useUserAgentMobile ? userAgentMobile : userAgentDesktop
            });
            requestHeaders.push({
                name: 'X-Forwarded-For',
                value: '66.249.66.1'
            });
        }

        // override User-Agent to use Bingbot
        if (matchUrlDomain(useBingBot, details.url)) {
            requestHeaders.push({
                name: 'User-Agent',
                value: useUserAgentMobile ? userAgentMobileBingBot : userAgentDesktopBingBot
            });
        }

        // override User-Agent to use Google AdsBot Mobile Web
        if (matchUrlDomain(useMsnBot, details.url)) {
            requestHeaders.push({
                name: 'User-Agent',
                value: userAgentMsnBot
            });
        }

        // remove cookies before page load
        const enabledCookies = allowCookies.some(function (site) {
            return matchUrlDomain(site, details.url);
        });
        if (!enabledCookies) {
            requestHeaders = requestHeaders.map(function (requestHeader) {
                if (requestHeader.name === 'Cookie') {
                    requestHeader.value = '';
                }
                return requestHeader;
            });
        }

        if (tabId !== -1) {
            extensionApi.tabs.get(tabId, function (currentTab) {
                // Validate url of current tab to avoid injecting script to unrelated sites
                if (currentTab && currentTab.url && isSiteEnabled(currentTab)) {
                    // run contentScript inside tab
                    extensionApi.tabs.executeScript(tabId, {
                        file: 'src/js/contentScript.js',
                        runAt: 'document_start'
                    }, function (res) {
                        if (extensionApi.runtime.lastError || res[0]) {

                        }
                    });
                }
            });
        }

        return { requestHeaders: requestHeaders };
    }, {
        urls: ['<all_urls>']
    }, extraInfoSpec);

    // remove cookies after page load
    extensionApi.webRequest.onCompleted.addListener(function (details) {
        let domainToRemove;
        for (const domain of _removeCookies) {
            if (enabledSites.includes(domain) && matchUrlDomain(domain, details.url)) {
                domainToRemove = domain;
                break;
            }
        }
        if (domainToRemove) {
            extensionApi.cookies.getAll({ domain: domainToRemove }, function (cookies) {
                for (const ck of cookies) {
                    const cookie = {
                        url: (ck.secure ? 'https://' : 'http://') + ck.domain + ck.path,
                        name: ck.name,
                        storeId: ck.storeId
                    };
                    // .firstPartyDomain = undefined on Chrome (doesn't support it)
                    if (ck.firstPartyDomain !== undefined) {
                        cookie.firstPartyDomain = ck.firstPartyDomain;
                    }
                    const cookieDomain = ck.domain;
                    const rcDomain = cookieDomain.replace(/^(\.?www\.|\.)/, '');
                    // hold specific cookie(s) from removeCookies domains
                    if ((rcDomain in removeCookiesSelectHold) && removeCookiesSelectHold[rcDomain].includes(ck.name)) {
                        continue; // don't remove specific cookie
                    }
                    // drop only specific cookie(s) from removeCookies domains
                    if ((rcDomain in removeCookiesSelectDrop) && !(removeCookiesSelectDrop[rcDomain].includes(ck.name))) {
                        continue; // only remove specific cookie
                    }
                    extensionApi.cookies.remove(cookie);
                }
            });
        }
    }, {
        urls: ['<all_urls>']
    });

    // Google Analytics to anonymously track DAU (Chrome only)
    function initGA() {
        (function (i, s, o, g, r, a, m) {
            i.GoogleAnalyticsObject = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments);
            }, i[r].l = 1 * new Date();
            a = s.createElement(o), m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-69824169-2', 'auto');
        ga('set', 'checkProtocolTask', null);
        ga('set', 'anonymizeIp', true);
        ga('send', 'pageview');
    }

    function isSiteEnabled(details) {
        const enabledSite = matchUrlDomain(enabledSites, details.url);
        if (enabledSite in restrictions) {
            return restrictions[enabledSite].test(details.url);
        }
        return !!enabledSite;
    }

    function matchUrlDomain(domains, url) {
        return matchDomain(domains, urlHost(url));
    }

    function matchDomain(domains, hostname) {
        let matchedDomain = false;
        if (!hostname) { hostname = window.location.hostname; }
        if (typeof domains === 'string') { domains = [domains]; }
        domains.some(domain => (hostname === domain || hostname.endsWith('.' + domain)) && (matchedDomain = domain));
        return matchedDomain;
    }

    function urlHost(url) {
        if (url && url.startsWith('http')) {
            try {
                return new URL(url).hostname;
            } catch (e) {
                console.log(`url not valid: ${url} error: ${e}`);
            }
        }
        return url;
    }
})();

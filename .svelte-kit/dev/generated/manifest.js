const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\interdimensional-portal.svelte"),
	() => import("..\\..\\..\\src\\routes\\fortnite-community.svelte"),
	() => import("..\\..\\..\\src\\routes\\fortnite-cosmetics.svelte"),
	() => import("..\\..\\..\\src\\routes\\fortnite-item-shop.svelte"),
	() => import("..\\..\\..\\src\\routes\\royalty-free-music.svelte"),
	() => import("..\\..\\..\\src\\routes\\fortnite-building.svelte"),
	() => import("..\\..\\..\\src\\routes\\fortnite-creative.svelte"),
	() => import("..\\..\\..\\src\\routes\\fortnite-settings.svelte"),
	() => import("..\\..\\..\\src\\routes\\fortnite-upcoming.svelte"),
	() => import("..\\..\\..\\src\\routes\\fortnite-fishing.svelte"),
	() => import("..\\..\\..\\src\\routes\\history-of-saucy.svelte"),
	() => import("..\\..\\..\\src\\routes\\home-improvement.svelte"),
	() => import("..\\..\\..\\src\\routes\\internet-archive.svelte"),
	() => import("..\\..\\..\\src\\routes\\protect-wildlife.svelte"),
	() => import("..\\..\\..\\src\\routes\\saucy-foundation.svelte"),
	() => import("..\\..\\..\\src\\routes\\spatial-thinking.svelte"),
	() => import("..\\..\\..\\src\\routes\\climate-choices.svelte"),
	() => import("..\\..\\..\\src\\routes\\fortnite-events.svelte"),
	() => import("..\\..\\..\\src\\routes\\fortnite-quests.svelte"),
	() => import("..\\..\\..\\src\\routes\\gender-identity.svelte"),
	() => import("..\\..\\..\\src\\routes\\saucy-community.svelte"),
	() => import("..\\..\\..\\src\\routes\\chess-practice.svelte"),
	() => import("..\\..\\..\\src\\routes\\family-history.svelte"),
	() => import("..\\..\\..\\src\\routes\\imagined-order.svelte"),
	() => import("..\\..\\..\\src\\routes\\impact-climate.svelte"),
	() => import("..\\..\\..\\src\\routes\\plastic-oceans.svelte"),
	() => import("..\\..\\..\\src\\routes\\randomlocation.svelte"),
	() => import("..\\..\\..\\src\\routes\\saucy-products.svelte"),
	() => import("..\\..\\..\\src\\routes\\sustainability.svelte"),
	() => import("..\\..\\..\\src\\routes\\carbon-offset.svelte"),
	() => import("..\\..\\..\\src\\routes\\crypto-wallet.svelte"),
	() => import("..\\..\\..\\src\\routes\\fortnite-maps.svelte"),
	() => import("..\\..\\..\\src\\routes\\fortnite-news.svelte"),
	() => import("..\\..\\..\\src\\routes\\love-her-feet.svelte"),
	() => import("..\\..\\..\\src\\routes\\museum-search.svelte"),
	() => import("..\\..\\..\\src\\routes\\notifications.svelte"),
	() => import("..\\..\\..\\src\\routes\\pwabuilder-sw.svelte"),
	() => import("..\\..\\..\\src\\routes\\saucy-stories.svelte"),
	() => import("..\\..\\..\\src\\routes\\sex-positions.svelte"),
	() => import("..\\..\\..\\src\\routes\\sign-language.svelte"),
	() => import("..\\..\\..\\src\\routes\\social-travel.svelte"),
	() => import("..\\..\\..\\src\\routes\\sports-scores.svelte"),
	() => import("..\\..\\..\\src\\routes\\womens-rights.svelte"),
	() => import("..\\..\\..\\src\\routes\\cloud-search.svelte"),
	() => import("..\\..\\..\\src\\routes\\collectibles.svelte"),
	() => import("..\\..\\..\\src\\routes\\destinations.svelte"),
	() => import("..\\..\\..\\src\\routes\\explanations.svelte"),
	() => import("..\\..\\..\\src\\routes\\finance-news.svelte"),
	() => import("..\\..\\..\\src\\routes\\fortnite-map.svelte"),
	() => import("..\\..\\..\\src\\routes\\friends-room.svelte"),
	() => import("..\\..\\..\\src\\routes\\help-poverty.svelte"),
	() => import("..\\..\\..\\src\\routes\\house-plants.svelte"),
	() => import("..\\..\\..\\src\\routes\\intelligence.svelte"),
	() => import("..\\..\\..\\src\\routes\\record-label.svelte"),
	() => import("..\\..\\..\\src\\routes\\wine-tasting.svelte"),
	() => import("..\\..\\..\\src\\routes\\drone-spots.svelte"),
	() => import("..\\..\\..\\src\\routes\\edit-images.svelte"),
	() => import("..\\..\\..\\src\\routes\\edit-videos.svelte"),
	() => import("..\\..\\..\\src\\routes\\electricity.svelte"),
	() => import("..\\..\\..\\src\\routes\\feed-hungry.svelte"),
	() => import("..\\..\\..\\src\\routes\\flappy-bird.svelte"),
	() => import("..\\..\\..\\src\\routes\\information.svelte"),
	() => import("..\\..\\..\\src\\routes\\kids-videos.svelte"),
	() => import("..\\..\\..\\src\\routes\\planetarium.svelte"),
	() => import("..\\..\\..\\src\\routes\\real-estate.svelte"),
	() => import("..\\..\\..\\src\\routes\\saucy-radio.svelte"),
	() => import("..\\..\\..\\src\\routes\\saucy-vlogs.svelte"),
	() => import("..\\..\\..\\src\\routes\\sports-news.svelte"),
	() => import("..\\..\\..\\src\\routes\\suggestions.svelte"),
	() => import("..\\..\\..\\src\\routes\\tarot-cards.svelte"),
	() => import("..\\..\\..\\src\\routes\\tic-tac-toe.svelte"),
	() => import("..\\..\\..\\src\\routes\\video-games.svelte"),
	() => import("..\\..\\..\\src\\routes\\watch-party.svelte"),
	() => import("..\\..\\..\\src\\routes\\affiliates.svelte"),
	() => import("..\\..\\..\\src\\routes\\audio-chat.svelte"),
	() => import("..\\..\\..\\src\\routes\\basketball.svelte"),
	() => import("..\\..\\..\\src\\routes\\calculator.svelte"),
	() => import("..\\..\\..\\src\\routes\\dictionary.svelte"),
	() => import("..\\..\\..\\src\\routes\\dopaminite.svelte"),
	() => import("..\\..\\..\\src\\routes\\floor-plan.svelte"),
	() => import("..\\..\\..\\src\\routes\\green-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\healthcare.svelte"),
	() => import("..\\..\\..\\src\\routes\\home-decor.svelte"),
	() => import("..\\..\\..\\src\\routes\\hummingbot.svelte"),
	() => import("..\\..\\..\\src\\routes\\kids-learn.svelte"),
	() => import("..\\..\\..\\src\\routes\\life-hacks.svelte"),
	() => import("..\\..\\..\\src\\routes\\media-news.svelte"),
	() => import("..\\..\\..\\src\\routes\\pool-suite.svelte"),
	() => import("..\\..\\..\\src\\routes\\road-trips.svelte"),
	() => import("..\\..\\..\\src\\routes\\satellites.svelte"),
	() => import("..\\..\\..\\src\\routes\\saucy-chat.svelte"),
	() => import("..\\..\\..\\src\\routes\\saucy-coin.svelte"),
	() => import("..\\..\\..\\src\\routes\\saucy-feed.svelte"),
	() => import("..\\..\\..\\src\\routes\\saucy-nfts.svelte"),
	() => import("..\\..\\..\\src\\routes\\send-water.svelte"),
	() => import("..\\..\\..\\src\\routes\\the-bridge.svelte"),
	() => import("..\\..\\..\\src\\routes\\tier-lists.svelte"),
	() => import("..\\..\\..\\src\\routes\\wine-learn.svelte"),
	() => import("..\\..\\..\\src\\routes\\world-news.svelte"),
	() => import("..\\..\\..\\src\\routes\\zero-point.svelte"),
	() => import("..\\..\\..\\src\\routes\\astrology.svelte"),
	() => import("..\\..\\..\\src\\routes\\chemistry.svelte"),
	() => import("..\\..\\..\\src\\routes\\christian.svelte"),
	() => import("..\\..\\..\\src\\routes\\decisions.svelte"),
	() => import("..\\..\\..\\src\\routes\\downloads.svelte"),
	() => import("..\\..\\..\\src\\routes\\furniture.svelte"),
	() => import("..\\..\\..\\src\\routes\\galleries.svelte"),
	() => import("..\\..\\..\\src\\routes\\groceries.svelte"),
	() => import("..\\..\\..\\src\\routes\\happening.svelte"),
	() => import("..\\..\\..\\src\\routes\\nft-drops.svelte"),
	() => import("..\\..\\..\\src\\routes\\night-sky.svelte"),
	() => import("..\\..\\..\\src\\routes\\passwords.svelte"),
	() => import("..\\..\\..\\src\\routes\\pet-adopt.svelte"),
	() => import("..\\..\\..\\src\\routes\\pet-store.svelte"),
	() => import("..\\..\\..\\src\\routes\\plan-trip.svelte"),
	() => import("..\\..\\..\\src\\routes\\playlists.svelte"),
	() => import("..\\..\\..\\src\\routes\\randomgif.svelte"),
	() => import("..\\..\\..\\src\\routes\\resources.svelte"),
	() => import("..\\..\\..\\src\\routes\\rilakkuma.svelte"),
	() => import("..\\..\\..\\src\\routes\\spotlight.svelte"),
	() => import("..\\..\\..\\src\\routes\\stopwatch.svelte"),
	() => import("..\\..\\..\\src\\routes\\subscribe.svelte"),
	() => import("..\\..\\..\\src\\routes\\time-warp.svelte"),
	() => import("..\\..\\..\\src\\routes\\translate.svelte"),
	() => import("..\\..\\..\\src\\routes\\2000s-tv.svelte"),
	() => import("..\\..\\..\\src\\routes\\activity.svelte"),
	() => import("..\\..\\..\\src\\routes\\antiques.svelte"),
	() => import("..\\..\\..\\src\\routes\\baseball.svelte"),
	() => import("..\\..\\..\\src\\routes\\baseload.svelte"),
	() => import("..\\..\\..\\src\\routes\\blogging.svelte"),
	() => import("..\\..\\..\\src\\routes\\bob-ross.svelte"),
	() => import("..\\..\\..\\src\\routes\\buddhism.svelte"),
	() => import("..\\..\\..\\src\\routes\\calendar.svelte"),
	() => import("..\\..\\..\\src\\routes\\checkers.svelte"),
	() => import("..\\..\\..\\src\\routes\\coin-cap.svelte"),
	() => import("..\\..\\..\\src\\routes\\concerts.svelte"),
	() => import("..\\..\\..\\src\\routes\\cookware.svelte"),
	() => import("..\\..\\..\\src\\routes\\database.svelte"),
	() => import("..\\..\\..\\src\\routes\\discover.svelte"),
	() => import("..\\..\\..\\src\\routes\\dominoes.svelte"),
	() => import("..\\..\\..\\src\\routes\\exchange.svelte"),
	() => import("..\\..\\..\\src\\routes\\finances.svelte"),
	() => import("..\\..\\..\\src\\routes\\football.svelte"),
	() => import("..\\..\\..\\src\\routes\\hinduism.svelte"),
	() => import("..\\..\\..\\src\\routes\\mcbroken.svelte"),
	() => import("..\\..\\..\\src\\routes\\meditate.svelte"),
	() => import("..\\..\\..\\src\\routes\\new-porn.svelte"),
	() => import("..\\..\\..\\src\\routes\\packages.svelte"),
	() => import("..\\..\\..\\src\\routes\\pomodoro.svelte"),
	() => import("..\\..\\..\\src\\routes\\products.svelte"),
	() => import("..\\..\\..\\src\\routes\\roundups.svelte"),
	() => import("..\\..\\..\\src\\routes\\showcase.svelte"),
	() => import("..\\..\\..\\src\\routes\\smartful.svelte"),
	() => import("..\\..\\..\\src\\routes\\snippets.svelte"),
	() => import("..\\..\\..\\src\\routes\\starlink.svelte"),
	() => import("..\\..\\..\\src\\routes\\transfer.svelte"),
	() => import("..\\..\\..\\src\\routes\\vacation.svelte"),
	() => import("..\\..\\..\\src\\routes\\workouts.svelte"),
	() => import("..\\..\\..\\src\\routes\\account.svelte"),
	() => import("..\\..\\..\\src\\routes\\animals.svelte"),
	() => import("..\\..\\..\\src\\routes\\animate.svelte"),
	() => import("..\\..\\..\\src\\routes\\any-api.svelte"),
	() => import("..\\..\\..\\src\\routes\\auction.svelte"),
	() => import("..\\..\\..\\src\\routes\\booking.svelte"),
	() => import("..\\..\\..\\src\\routes\\contact.svelte"),
	() => import("..\\..\\..\\src\\routes\\doctors.svelte"),
	() => import("..\\..\\..\\src\\routes\\esports.svelte"),
	() => import("..\\..\\..\\src\\routes\\fashion.svelte"),
	() => import("..\\..\\..\\src\\routes\\flights.svelte"),
	() => import("..\\..\\..\\src\\routes\\hangout.svelte"),
	() => import("..\\..\\..\\src\\routes\\history.svelte"),
	() => import("..\\..\\..\\src\\routes\\lgbtqia.svelte"),
	() => import("..\\..\\..\\src\\routes\\mindmap.svelte"),
	() => import("..\\..\\..\\src\\routes\\mission.svelte"),
	() => import("..\\..\\..\\src\\routes\\modules.svelte"),
	() => import("..\\..\\..\\src\\routes\\pilates.svelte"),
	() => import("..\\..\\..\\src\\routes\\planner.svelte"),
	() => import("..\\..\\..\\src\\routes\\pusheen.svelte"),
	() => import("..\\..\\..\\src\\routes\\recipes.svelte"),
	() => import("..\\..\\..\\src\\routes\\sitemap.svelte"),
	() => import("..\\..\\..\\src\\routes\\support.svelte"),
	() => import("..\\..\\..\\src\\routes\\surveys.svelte"),
	() => import("..\\..\\..\\src\\routes\\therapy.svelte"),
	() => import("..\\..\\..\\src\\routes\\tracker.svelte"),
	() => import("..\\..\\..\\src\\routes\\uniswap.svelte"),
	() => import("..\\..\\..\\src\\routes\\updates.svelte"),
	() => import("..\\..\\..\\src\\routes\\weather.svelte"),
	() => import("..\\..\\..\\src\\routes\\website.svelte"),
	() => import("..\\..\\..\\src\\routes\\windows.svelte"),
	() => import("..\\..\\..\\src\\routes\\70s-tv.svelte"),
	() => import("..\\..\\..\\src\\routes\\80s-tv.svelte"),
	() => import("..\\..\\..\\src\\routes\\90s-tv.svelte"),
	() => import("..\\..\\..\\src\\routes\\arcade.svelte"),
	() => import("..\\..\\..\\src\\routes\\camera.svelte"),
	() => import("..\\..\\..\\src\\routes\\coding.svelte"),
	() => import("..\\..\\..\\src\\routes\\colors.svelte"),
	() => import("..\\..\\..\\src\\routes\\donate.svelte"),
	() => import("..\\..\\..\\src\\routes\\editor.svelte"),
	() => import("..\\..\\..\\src\\routes\\fabric.svelte"),
	() => import("..\\..\\..\\src\\routes\\forest.svelte"),
	() => import("..\\..\\..\\src\\routes\\hockey.svelte"),
	() => import("..\\..\\..\\src\\routes\\kawaii.svelte"),
	() => import("..\\..\\..\\src\\routes\\lyrics.svelte"),
	() => import("..\\..\\..\\src\\routes\\melody.svelte"),
	() => import("..\\..\\..\\src\\routes\\mining.svelte"),
	() => import("..\\..\\..\\src\\routes\\museum.svelte"),
	() => import("..\\..\\..\\src\\routes\\pacman.svelte"),
	() => import("..\\..\\..\\src\\routes\\photos.svelte"),
	() => import("..\\..\\..\\src\\routes\\places.svelte"),
	() => import("..\\..\\..\\src\\routes\\plants.svelte"),
	() => import("..\\..\\..\\src\\routes\\record.svelte"),
	() => import("..\\..\\..\\src\\routes\\rivals.svelte"),
	() => import("..\\..\\..\\src\\routes\\robots.svelte"),
	() => import("..\\..\\..\\src\\routes\\scales.svelte"),
	() => import("..\\..\\..\\src\\routes\\search.svelte"),
	() => import("..\\..\\..\\src\\routes\\soccer.svelte"),
	() => import("..\\..\\..\\src\\routes\\status.svelte"),
	() => import("..\\..\\..\\src\\routes\\stream.svelte"),
	() => import("..\\..\\..\\src\\routes\\survey.svelte"),
	() => import("..\\..\\..\\src\\routes\\tennis.svelte"),
	() => import("..\\..\\..\\src\\routes\\tetris.svelte"),
	() => import("..\\..\\..\\src\\routes\\tiktok.svelte"),
	() => import("..\\..\\..\\src\\routes\\trends.svelte"),
	() => import("..\\..\\..\\src\\routes\\twitch.svelte"),
	() => import("..\\..\\..\\src\\routes\\videos.svelte"),
	() => import("..\\..\\..\\src\\routes\\walnut.svelte"),
	() => import("..\\..\\..\\src\\routes\\about.svelte"),
	() => import("..\\..\\..\\src\\routes\\beats.svelte"),
	() => import("..\\..\\..\\src\\routes\\bible.svelte"),
	() => import("..\\..\\..\\src\\routes\\books.svelte"),
	() => import("..\\..\\..\\src\\routes\\bored.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards.svelte"),
	() => import("..\\..\\..\\src\\routes\\chess.svelte"),
	() => import("..\\..\\..\\src\\routes\\clock.svelte"),
	() => import("..\\..\\..\\src\\routes\\emoji.svelte"),
	() => import("..\\..\\..\\src\\routes\\fonts.svelte"),
	() => import("..\\..\\..\\src\\routes\\games.svelte"),
	() => import("..\\..\\..\\src\\routes\\house.svelte"),
	() => import("..\\..\\..\\src\\routes\\islam.svelte"),
	() => import("..\\..\\..\\src\\routes\\links.svelte"),
	() => import("..\\..\\..\\src\\routes\\lists.svelte"),
	() => import("..\\..\\..\\src\\routes\\loops.svelte"),
	() => import("..\\..\\..\\src\\routes\\memes.svelte"),
	() => import("..\\..\\..\\src\\routes\\merch.svelte"),
	() => import("..\\..\\..\\src\\routes\\music.svelte"),
	() => import("..\\..\\..\\src\\routes\\notes.svelte"),
	() => import("..\\..\\..\\src\\routes\\pages.svelte"),
	() => import("..\\..\\..\\src\\routes\\radio.svelte"),
	() => import("..\\..\\..\\src\\routes\\ships.svelte"),
	() => import("..\\..\\..\\src\\routes\\stock.svelte"),
	() => import("..\\..\\..\\src\\routes\\store.svelte"),
	() => import("..\\..\\..\\src\\routes\\terms.svelte"),
	() => import("..\\..\\..\\src\\routes\\think.svelte"),
	() => import("..\\..\\..\\src\\routes\\todos\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\train.svelte"),
	() => import("..\\..\\..\\src\\routes\\trees.svelte"),
	() => import("..\\..\\..\\src\\routes\\trust.svelte"),
	() => import("..\\..\\..\\src\\routes\\vegan.svelte"),
	() => import("..\\..\\..\\src\\routes\\views.svelte"),
	() => import("..\\..\\..\\src\\routes\\watch.svelte"),
	() => import("..\\..\\..\\src\\routes\\Home.svelte"),
	() => import("..\\..\\..\\src\\routes\\beer.svelte"),
	() => import("..\\..\\..\\src\\routes\\chat.svelte"),
	() => import("..\\..\\..\\src\\routes\\code.svelte"),
	() => import("..\\..\\..\\src\\routes\\data.svelte"),
	() => import("..\\..\\..\\src\\routes\\dayz.svelte"),
	() => import("..\\..\\..\\src\\routes\\draw.svelte"),
	() => import("..\\..\\..\\src\\routes\\fans.svelte"),
	() => import("..\\..\\..\\src\\routes\\feed.svelte"),
	() => import("..\\..\\..\\src\\routes\\gifs.svelte"),
	() => import("..\\..\\..\\src\\routes\\golf.svelte"),
	() => import("..\\..\\..\\src\\routes\\lofi.svelte"),
	() => import("..\\..\\..\\src\\routes\\maps.svelte"),
	() => import("..\\..\\..\\src\\routes\\ping.svelte"),
	() => import("..\\..\\..\\src\\routes\\porn.svelte"),
	() => import("..\\..\\..\\src\\routes\\tour.svelte"),
	() => import("..\\..\\..\\src\\routes\\ufos.svelte"),
	() => import("..\\..\\..\\src\\routes\\vlog.svelte"),
	() => import("..\\..\\..\\src\\routes\\wine.svelte"),
	() => import("..\\..\\..\\src\\routes\\yoga.svelte"),
	() => import("..\\..\\..\\src\\routes\\404.svelte"),
	() => import("..\\..\\..\\src\\routes\\api.svelte"),
	() => import("..\\..\\..\\src\\routes\\art.svelte"),
	() => import("..\\..\\..\\src\\routes\\diy.svelte"),
	() => import("..\\..\\..\\src\\routes\\gym.svelte"),
	() => import("..\\..\\..\\src\\routes\\mix.svelte"),
	() => import("..\\..\\..\\src\\routes\\nft.svelte"),
	() => import("..\\..\\..\\src\\routes\\rad.svelte"),
	() => import("..\\..\\..\\src\\routes\\uno.svelte"),
	() => import("..\\..\\..\\src\\routes\\zoo.svelte"),
	() => import("..\\..\\..\\src\\routes\\ai.svelte"),
	() => import("..\\..\\..\\src\\routes\\dj.svelte"),
	() => import("..\\..\\..\\src\\routes\\ml.svelte"),
	() => import("..\\..\\..\\src\\routes\\tv.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/interdimensional-portal.svelte
	[/^\/interdimensional-portal\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/fortnite-community.svelte
	[/^\/fortnite-community\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/fortnite-cosmetics.svelte
	[/^\/fortnite-cosmetics\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/fortnite-item-shop.svelte
	[/^\/fortnite-item-shop\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/royalty-free-music.svelte
	[/^\/royalty-free-music\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/fortnite-building.svelte
	[/^\/fortnite-building\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/fortnite-creative.svelte
	[/^\/fortnite-creative\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/fortnite-settings.svelte
	[/^\/fortnite-settings\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/fortnite-upcoming.svelte
	[/^\/fortnite-upcoming\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/fortnite-fishing.svelte
	[/^\/fortnite-fishing\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/history-of-saucy.svelte
	[/^\/history-of-saucy\/?$/, [c[0], c[13]], [c[1]]],

	// src/routes/home-improvement.svelte
	[/^\/home-improvement\/?$/, [c[0], c[14]], [c[1]]],

	// src/routes/internet-archive.svelte
	[/^\/internet-archive\/?$/, [c[0], c[15]], [c[1]]],

	// src/routes/protect-wildlife.svelte
	[/^\/protect-wildlife\/?$/, [c[0], c[16]], [c[1]]],

	// src/routes/saucy-foundation.svelte
	[/^\/saucy-foundation\/?$/, [c[0], c[17]], [c[1]]],

	// src/routes/spatial-thinking.svelte
	[/^\/spatial-thinking\/?$/, [c[0], c[18]], [c[1]]],

	// src/routes/climate-choices.svelte
	[/^\/climate-choices\/?$/, [c[0], c[19]], [c[1]]],

	// src/routes/fortnite-events.svelte
	[/^\/fortnite-events\/?$/, [c[0], c[20]], [c[1]]],

	// src/routes/fortnite-quests.svelte
	[/^\/fortnite-quests\/?$/, [c[0], c[21]], [c[1]]],

	// src/routes/gender-identity.svelte
	[/^\/gender-identity\/?$/, [c[0], c[22]], [c[1]]],

	// src/routes/saucy-community.svelte
	[/^\/saucy-community\/?$/, [c[0], c[23]], [c[1]]],

	// src/routes/chess-practice.svelte
	[/^\/chess-practice\/?$/, [c[0], c[24]], [c[1]]],

	// src/routes/family-history.svelte
	[/^\/family-history\/?$/, [c[0], c[25]], [c[1]]],

	// src/routes/imagined-order.svelte
	[/^\/imagined-order\/?$/, [c[0], c[26]], [c[1]]],

	// src/routes/impact-climate.svelte
	[/^\/impact-climate\/?$/, [c[0], c[27]], [c[1]]],

	// src/routes/plastic-oceans.svelte
	[/^\/plastic-oceans\/?$/, [c[0], c[28]], [c[1]]],

	// src/routes/randomlocation.svelte
	[/^\/randomlocation\/?$/, [c[0], c[29]], [c[1]]],

	// src/routes/saucy-products.svelte
	[/^\/saucy-products\/?$/, [c[0], c[30]], [c[1]]],

	// src/routes/sustainability.svelte
	[/^\/sustainability\/?$/, [c[0], c[31]], [c[1]]],

	// src/routes/carbon-offset.svelte
	[/^\/carbon-offset\/?$/, [c[0], c[32]], [c[1]]],

	// src/routes/crypto-wallet.svelte
	[/^\/crypto-wallet\/?$/, [c[0], c[33]], [c[1]]],

	// src/routes/fortnite-maps.svelte
	[/^\/fortnite-maps\/?$/, [c[0], c[34]], [c[1]]],

	// src/routes/fortnite-news.svelte
	[/^\/fortnite-news\/?$/, [c[0], c[35]], [c[1]]],

	// src/routes/love-her-feet.svelte
	[/^\/love-her-feet\/?$/, [c[0], c[36]], [c[1]]],

	// src/routes/museum-search.svelte
	[/^\/museum-search\/?$/, [c[0], c[37]], [c[1]]],

	// src/routes/notifications.svelte
	[/^\/notifications\/?$/, [c[0], c[38]], [c[1]]],

	// src/routes/pwabuilder-sw.svelte
	[/^\/pwabuilder-sw\/?$/, [c[0], c[39]], [c[1]]],

	// src/routes/saucy-stories.svelte
	[/^\/saucy-stories\/?$/, [c[0], c[40]], [c[1]]],

	// src/routes/sex-positions.svelte
	[/^\/sex-positions\/?$/, [c[0], c[41]], [c[1]]],

	// src/routes/sign-language.svelte
	[/^\/sign-language\/?$/, [c[0], c[42]], [c[1]]],

	// src/routes/social-travel.svelte
	[/^\/social-travel\/?$/, [c[0], c[43]], [c[1]]],

	// src/routes/sports-scores.svelte
	[/^\/sports-scores\/?$/, [c[0], c[44]], [c[1]]],

	// src/routes/womens-rights.svelte
	[/^\/womens-rights\/?$/, [c[0], c[45]], [c[1]]],

	// src/routes/cloud-search.svelte
	[/^\/cloud-search\/?$/, [c[0], c[46]], [c[1]]],

	// src/routes/collectibles.svelte
	[/^\/collectibles\/?$/, [c[0], c[47]], [c[1]]],

	// src/routes/destinations.svelte
	[/^\/destinations\/?$/, [c[0], c[48]], [c[1]]],

	// src/routes/explanations.svelte
	[/^\/explanations\/?$/, [c[0], c[49]], [c[1]]],

	// src/routes/finance-news.svelte
	[/^\/finance-news\/?$/, [c[0], c[50]], [c[1]]],

	// src/routes/fortnite-map.svelte
	[/^\/fortnite-map\/?$/, [c[0], c[51]], [c[1]]],

	// src/routes/friends-room.svelte
	[/^\/friends-room\/?$/, [c[0], c[52]], [c[1]]],

	// src/routes/help-poverty.svelte
	[/^\/help-poverty\/?$/, [c[0], c[53]], [c[1]]],

	// src/routes/house-plants.svelte
	[/^\/house-plants\/?$/, [c[0], c[54]], [c[1]]],

	// src/routes/intelligence.svelte
	[/^\/intelligence\/?$/, [c[0], c[55]], [c[1]]],

	// src/routes/record-label.svelte
	[/^\/record-label\/?$/, [c[0], c[56]], [c[1]]],

	// src/routes/wine-tasting.svelte
	[/^\/wine-tasting\/?$/, [c[0], c[57]], [c[1]]],

	// src/routes/drone-spots.svelte
	[/^\/drone-spots\/?$/, [c[0], c[58]], [c[1]]],

	// src/routes/edit-images.svelte
	[/^\/edit-images\/?$/, [c[0], c[59]], [c[1]]],

	// src/routes/edit-videos.svelte
	[/^\/edit-videos\/?$/, [c[0], c[60]], [c[1]]],

	// src/routes/electricity.svelte
	[/^\/electricity\/?$/, [c[0], c[61]], [c[1]]],

	// src/routes/feed-hungry.svelte
	[/^\/feed-hungry\/?$/, [c[0], c[62]], [c[1]]],

	// src/routes/flappy-bird.svelte
	[/^\/flappy-bird\/?$/, [c[0], c[63]], [c[1]]],

	// src/routes/information.svelte
	[/^\/information\/?$/, [c[0], c[64]], [c[1]]],

	// src/routes/kids-videos.svelte
	[/^\/kids-videos\/?$/, [c[0], c[65]], [c[1]]],

	// src/routes/planetarium.svelte
	[/^\/planetarium\/?$/, [c[0], c[66]], [c[1]]],

	// src/routes/real-estate.svelte
	[/^\/real-estate\/?$/, [c[0], c[67]], [c[1]]],

	// src/routes/saucy-radio.svelte
	[/^\/saucy-radio\/?$/, [c[0], c[68]], [c[1]]],

	// src/routes/saucy-vlogs.svelte
	[/^\/saucy-vlogs\/?$/, [c[0], c[69]], [c[1]]],

	// src/routes/sports-news.svelte
	[/^\/sports-news\/?$/, [c[0], c[70]], [c[1]]],

	// src/routes/suggestions.svelte
	[/^\/suggestions\/?$/, [c[0], c[71]], [c[1]]],

	// src/routes/tarot-cards.svelte
	[/^\/tarot-cards\/?$/, [c[0], c[72]], [c[1]]],

	// src/routes/tic-tac-toe.svelte
	[/^\/tic-tac-toe\/?$/, [c[0], c[73]], [c[1]]],

	// src/routes/video-games.svelte
	[/^\/video-games\/?$/, [c[0], c[74]], [c[1]]],

	// src/routes/watch-party.svelte
	[/^\/watch-party\/?$/, [c[0], c[75]], [c[1]]],

	// src/routes/affiliates.svelte
	[/^\/affiliates\/?$/, [c[0], c[76]], [c[1]]],

	// src/routes/audio-chat.svelte
	[/^\/audio-chat\/?$/, [c[0], c[77]], [c[1]]],

	// src/routes/basketball.svelte
	[/^\/basketball\/?$/, [c[0], c[78]], [c[1]]],

	// src/routes/calculator.svelte
	[/^\/calculator\/?$/, [c[0], c[79]], [c[1]]],

	// src/routes/dictionary.svelte
	[/^\/dictionary\/?$/, [c[0], c[80]], [c[1]]],

	// src/routes/dopaminite.svelte
	[/^\/dopaminite\/?$/, [c[0], c[81]], [c[1]]],

	// src/routes/floor-plan.svelte
	[/^\/floor-plan\/?$/, [c[0], c[82]], [c[1]]],

	// src/routes/green-card.svelte
	[/^\/green-card\/?$/, [c[0], c[83]], [c[1]]],

	// src/routes/healthcare.svelte
	[/^\/healthcare\/?$/, [c[0], c[84]], [c[1]]],

	// src/routes/home-decor.svelte
	[/^\/home-decor\/?$/, [c[0], c[85]], [c[1]]],

	// src/routes/hummingbot.svelte
	[/^\/hummingbot\/?$/, [c[0], c[86]], [c[1]]],

	// src/routes/kids-learn.svelte
	[/^\/kids-learn\/?$/, [c[0], c[87]], [c[1]]],

	// src/routes/life-hacks.svelte
	[/^\/life-hacks\/?$/, [c[0], c[88]], [c[1]]],

	// src/routes/media-news.svelte
	[/^\/media-news\/?$/, [c[0], c[89]], [c[1]]],

	// src/routes/pool-suite.svelte
	[/^\/pool-suite\/?$/, [c[0], c[90]], [c[1]]],

	// src/routes/road-trips.svelte
	[/^\/road-trips\/?$/, [c[0], c[91]], [c[1]]],

	// src/routes/satellites.svelte
	[/^\/satellites\/?$/, [c[0], c[92]], [c[1]]],

	// src/routes/saucy-chat.svelte
	[/^\/saucy-chat\/?$/, [c[0], c[93]], [c[1]]],

	// src/routes/saucy-coin.svelte
	[/^\/saucy-coin\/?$/, [c[0], c[94]], [c[1]]],

	// src/routes/saucy-feed.svelte
	[/^\/saucy-feed\/?$/, [c[0], c[95]], [c[1]]],

	// src/routes/saucy-nfts.svelte
	[/^\/saucy-nfts\/?$/, [c[0], c[96]], [c[1]]],

	// src/routes/send-water.svelte
	[/^\/send-water\/?$/, [c[0], c[97]], [c[1]]],

	// src/routes/the-bridge.svelte
	[/^\/the-bridge\/?$/, [c[0], c[98]], [c[1]]],

	// src/routes/tier-lists.svelte
	[/^\/tier-lists\/?$/, [c[0], c[99]], [c[1]]],

	// src/routes/wine-learn.svelte
	[/^\/wine-learn\/?$/, [c[0], c[100]], [c[1]]],

	// src/routes/world-news.svelte
	[/^\/world-news\/?$/, [c[0], c[101]], [c[1]]],

	// src/routes/zero-point.svelte
	[/^\/zero-point\/?$/, [c[0], c[102]], [c[1]]],

	// src/routes/astrology.svelte
	[/^\/astrology\/?$/, [c[0], c[103]], [c[1]]],

	// src/routes/chemistry.svelte
	[/^\/chemistry\/?$/, [c[0], c[104]], [c[1]]],

	// src/routes/christian.svelte
	[/^\/christian\/?$/, [c[0], c[105]], [c[1]]],

	// src/routes/decisions.svelte
	[/^\/decisions\/?$/, [c[0], c[106]], [c[1]]],

	// src/routes/downloads.svelte
	[/^\/downloads\/?$/, [c[0], c[107]], [c[1]]],

	// src/routes/furniture.svelte
	[/^\/furniture\/?$/, [c[0], c[108]], [c[1]]],

	// src/routes/galleries.svelte
	[/^\/galleries\/?$/, [c[0], c[109]], [c[1]]],

	// src/routes/groceries.svelte
	[/^\/groceries\/?$/, [c[0], c[110]], [c[1]]],

	// src/routes/happening.svelte
	[/^\/happening\/?$/, [c[0], c[111]], [c[1]]],

	// src/routes/nft-drops.svelte
	[/^\/nft-drops\/?$/, [c[0], c[112]], [c[1]]],

	// src/routes/night-sky.svelte
	[/^\/night-sky\/?$/, [c[0], c[113]], [c[1]]],

	// src/routes/passwords.svelte
	[/^\/passwords\/?$/, [c[0], c[114]], [c[1]]],

	// src/routes/pet-adopt.svelte
	[/^\/pet-adopt\/?$/, [c[0], c[115]], [c[1]]],

	// src/routes/pet-store.svelte
	[/^\/pet-store\/?$/, [c[0], c[116]], [c[1]]],

	// src/routes/plan-trip.svelte
	[/^\/plan-trip\/?$/, [c[0], c[117]], [c[1]]],

	// src/routes/playlists.svelte
	[/^\/playlists\/?$/, [c[0], c[118]], [c[1]]],

	// src/routes/randomgif.svelte
	[/^\/randomgif\/?$/, [c[0], c[119]], [c[1]]],

	// src/routes/resources.svelte
	[/^\/resources\/?$/, [c[0], c[120]], [c[1]]],

	// src/routes/rilakkuma.svelte
	[/^\/rilakkuma\/?$/, [c[0], c[121]], [c[1]]],

	// src/routes/spotlight.svelte
	[/^\/spotlight\/?$/, [c[0], c[122]], [c[1]]],

	// src/routes/stopwatch.svelte
	[/^\/stopwatch\/?$/, [c[0], c[123]], [c[1]]],

	// src/routes/subscribe.svelte
	[/^\/subscribe\/?$/, [c[0], c[124]], [c[1]]],

	// src/routes/time-warp.svelte
	[/^\/time-warp\/?$/, [c[0], c[125]], [c[1]]],

	// src/routes/translate.svelte
	[/^\/translate\/?$/, [c[0], c[126]], [c[1]]],

	// src/routes/2000s-tv.svelte
	[/^\/2000s-tv\/?$/, [c[0], c[127]], [c[1]]],

	// src/routes/activity.svelte
	[/^\/activity\/?$/, [c[0], c[128]], [c[1]]],

	// src/routes/antiques.svelte
	[/^\/antiques\/?$/, [c[0], c[129]], [c[1]]],

	// src/routes/baseball.svelte
	[/^\/baseball\/?$/, [c[0], c[130]], [c[1]]],

	// src/routes/baseload.svelte
	[/^\/baseload\/?$/, [c[0], c[131]], [c[1]]],

	// src/routes/blogging.svelte
	[/^\/blogging\/?$/, [c[0], c[132]], [c[1]]],

	// src/routes/bob-ross.svelte
	[/^\/bob-ross\/?$/, [c[0], c[133]], [c[1]]],

	// src/routes/buddhism.svelte
	[/^\/buddhism\/?$/, [c[0], c[134]], [c[1]]],

	// src/routes/calendar.svelte
	[/^\/calendar\/?$/, [c[0], c[135]], [c[1]]],

	// src/routes/checkers.svelte
	[/^\/checkers\/?$/, [c[0], c[136]], [c[1]]],

	// src/routes/coin-cap.svelte
	[/^\/coin-cap\/?$/, [c[0], c[137]], [c[1]]],

	// src/routes/concerts.svelte
	[/^\/concerts\/?$/, [c[0], c[138]], [c[1]]],

	// src/routes/cookware.svelte
	[/^\/cookware\/?$/, [c[0], c[139]], [c[1]]],

	// src/routes/database.svelte
	[/^\/database\/?$/, [c[0], c[140]], [c[1]]],

	// src/routes/discover.svelte
	[/^\/discover\/?$/, [c[0], c[141]], [c[1]]],

	// src/routes/dominoes.svelte
	[/^\/dominoes\/?$/, [c[0], c[142]], [c[1]]],

	// src/routes/exchange.svelte
	[/^\/exchange\/?$/, [c[0], c[143]], [c[1]]],

	// src/routes/finances.svelte
	[/^\/finances\/?$/, [c[0], c[144]], [c[1]]],

	// src/routes/football.svelte
	[/^\/football\/?$/, [c[0], c[145]], [c[1]]],

	// src/routes/hinduism.svelte
	[/^\/hinduism\/?$/, [c[0], c[146]], [c[1]]],

	// src/routes/manifest.json
	[/^\/manifest\/?$/],

	// src/routes/mcbroken.svelte
	[/^\/mcbroken\/?$/, [c[0], c[147]], [c[1]]],

	// src/routes/meditate.svelte
	[/^\/meditate\/?$/, [c[0], c[148]], [c[1]]],

	// src/routes/new-porn.svelte
	[/^\/new-porn\/?$/, [c[0], c[149]], [c[1]]],

	// src/routes/packages.svelte
	[/^\/packages\/?$/, [c[0], c[150]], [c[1]]],

	// src/routes/pomodoro.svelte
	[/^\/pomodoro\/?$/, [c[0], c[151]], [c[1]]],

	// src/routes/products.svelte
	[/^\/products\/?$/, [c[0], c[152]], [c[1]]],

	// src/routes/roundups.svelte
	[/^\/roundups\/?$/, [c[0], c[153]], [c[1]]],

	// src/routes/showcase.svelte
	[/^\/showcase\/?$/, [c[0], c[154]], [c[1]]],

	// src/routes/smartful.svelte
	[/^\/smartful\/?$/, [c[0], c[155]], [c[1]]],

	// src/routes/snippets.svelte
	[/^\/snippets\/?$/, [c[0], c[156]], [c[1]]],

	// src/routes/starlink.svelte
	[/^\/starlink\/?$/, [c[0], c[157]], [c[1]]],

	// src/routes/transfer.svelte
	[/^\/transfer\/?$/, [c[0], c[158]], [c[1]]],

	// src/routes/vacation.svelte
	[/^\/vacation\/?$/, [c[0], c[159]], [c[1]]],

	// src/routes/workouts.svelte
	[/^\/workouts\/?$/, [c[0], c[160]], [c[1]]],

	// src/routes/account.svelte
	[/^\/account\/?$/, [c[0], c[161]], [c[1]]],

	// src/routes/animals.svelte
	[/^\/animals\/?$/, [c[0], c[162]], [c[1]]],

	// src/routes/animate.svelte
	[/^\/animate\/?$/, [c[0], c[163]], [c[1]]],

	// src/routes/any-api.svelte
	[/^\/any-api\/?$/, [c[0], c[164]], [c[1]]],

	// src/routes/auction.svelte
	[/^\/auction\/?$/, [c[0], c[165]], [c[1]]],

	// src/routes/booking.svelte
	[/^\/booking\/?$/, [c[0], c[166]], [c[1]]],

	// src/routes/contact.svelte
	[/^\/contact\/?$/, [c[0], c[167]], [c[1]]],

	// src/routes/doctors.svelte
	[/^\/doctors\/?$/, [c[0], c[168]], [c[1]]],

	// src/routes/esports.svelte
	[/^\/esports\/?$/, [c[0], c[169]], [c[1]]],

	// src/routes/fashion.svelte
	[/^\/fashion\/?$/, [c[0], c[170]], [c[1]]],

	// src/routes/flights.svelte
	[/^\/flights\/?$/, [c[0], c[171]], [c[1]]],

	// src/routes/hangout.svelte
	[/^\/hangout\/?$/, [c[0], c[172]], [c[1]]],

	// src/routes/history.svelte
	[/^\/history\/?$/, [c[0], c[173]], [c[1]]],

	// src/routes/lgbtqia.svelte
	[/^\/lgbtqia\/?$/, [c[0], c[174]], [c[1]]],

	// src/routes/mindmap.svelte
	[/^\/mindmap\/?$/, [c[0], c[175]], [c[1]]],

	// src/routes/mission.svelte
	[/^\/mission\/?$/, [c[0], c[176]], [c[1]]],

	// src/routes/modules.svelte
	[/^\/modules\/?$/, [c[0], c[177]], [c[1]]],

	// src/routes/pilates.svelte
	[/^\/pilates\/?$/, [c[0], c[178]], [c[1]]],

	// src/routes/planner.svelte
	[/^\/planner\/?$/, [c[0], c[179]], [c[1]]],

	// src/routes/pusheen.svelte
	[/^\/pusheen\/?$/, [c[0], c[180]], [c[1]]],

	// src/routes/recipes.svelte
	[/^\/recipes\/?$/, [c[0], c[181]], [c[1]]],

	// src/routes/sitemap.svelte
	[/^\/sitemap\/?$/, [c[0], c[182]], [c[1]]],

	// src/routes/support.svelte
	[/^\/support\/?$/, [c[0], c[183]], [c[1]]],

	// src/routes/surveys.svelte
	[/^\/surveys\/?$/, [c[0], c[184]], [c[1]]],

	// src/routes/therapy.svelte
	[/^\/therapy\/?$/, [c[0], c[185]], [c[1]]],

	// src/routes/tracker.svelte
	[/^\/tracker\/?$/, [c[0], c[186]], [c[1]]],

	// src/routes/uniswap.svelte
	[/^\/uniswap\/?$/, [c[0], c[187]], [c[1]]],

	// src/routes/updates.svelte
	[/^\/updates\/?$/, [c[0], c[188]], [c[1]]],

	// src/routes/weather.svelte
	[/^\/weather\/?$/, [c[0], c[189]], [c[1]]],

	// src/routes/website.svelte
	[/^\/website\/?$/, [c[0], c[190]], [c[1]]],

	// src/routes/windows.svelte
	[/^\/windows\/?$/, [c[0], c[191]], [c[1]]],

	// src/routes/70s-tv.svelte
	[/^\/70s-tv\/?$/, [c[0], c[192]], [c[1]]],

	// src/routes/80s-tv.svelte
	[/^\/80s-tv\/?$/, [c[0], c[193]], [c[1]]],

	// src/routes/90s-tv.svelte
	[/^\/90s-tv\/?$/, [c[0], c[194]], [c[1]]],

	// src/routes/arcade.svelte
	[/^\/arcade\/?$/, [c[0], c[195]], [c[1]]],

	// src/routes/camera.svelte
	[/^\/camera\/?$/, [c[0], c[196]], [c[1]]],

	// src/routes/coding.svelte
	[/^\/coding\/?$/, [c[0], c[197]], [c[1]]],

	// src/routes/colors.svelte
	[/^\/colors\/?$/, [c[0], c[198]], [c[1]]],

	// src/routes/donate.svelte
	[/^\/donate\/?$/, [c[0], c[199]], [c[1]]],

	// src/routes/editor.svelte
	[/^\/editor\/?$/, [c[0], c[200]], [c[1]]],

	// src/routes/fabric.svelte
	[/^\/fabric\/?$/, [c[0], c[201]], [c[1]]],

	// src/routes/forest.svelte
	[/^\/forest\/?$/, [c[0], c[202]], [c[1]]],

	// src/routes/hockey.svelte
	[/^\/hockey\/?$/, [c[0], c[203]], [c[1]]],

	// src/routes/kawaii.svelte
	[/^\/kawaii\/?$/, [c[0], c[204]], [c[1]]],

	// src/routes/lyrics.svelte
	[/^\/lyrics\/?$/, [c[0], c[205]], [c[1]]],

	// src/routes/melody.svelte
	[/^\/melody\/?$/, [c[0], c[206]], [c[1]]],

	// src/routes/mining.svelte
	[/^\/mining\/?$/, [c[0], c[207]], [c[1]]],

	// src/routes/museum.svelte
	[/^\/museum\/?$/, [c[0], c[208]], [c[1]]],

	// src/routes/pacman.svelte
	[/^\/pacman\/?$/, [c[0], c[209]], [c[1]]],

	// src/routes/photos.svelte
	[/^\/photos\/?$/, [c[0], c[210]], [c[1]]],

	// src/routes/places.svelte
	[/^\/places\/?$/, [c[0], c[211]], [c[1]]],

	// src/routes/plants.svelte
	[/^\/plants\/?$/, [c[0], c[212]], [c[1]]],

	// src/routes/record.svelte
	[/^\/record\/?$/, [c[0], c[213]], [c[1]]],

	// src/routes/rivals.svelte
	[/^\/rivals\/?$/, [c[0], c[214]], [c[1]]],

	// src/routes/robots.svelte
	[/^\/robots\/?$/, [c[0], c[215]], [c[1]]],

	// src/routes/scales.svelte
	[/^\/scales\/?$/, [c[0], c[216]], [c[1]]],

	// src/routes/search.svelte
	[/^\/search\/?$/, [c[0], c[217]], [c[1]]],

	// src/routes/soccer.svelte
	[/^\/soccer\/?$/, [c[0], c[218]], [c[1]]],

	// src/routes/status.svelte
	[/^\/status\/?$/, [c[0], c[219]], [c[1]]],

	// src/routes/stream.svelte
	[/^\/stream\/?$/, [c[0], c[220]], [c[1]]],

	// src/routes/survey.svelte
	[/^\/survey\/?$/, [c[0], c[221]], [c[1]]],

	// src/routes/tennis.svelte
	[/^\/tennis\/?$/, [c[0], c[222]], [c[1]]],

	// src/routes/tetris.svelte
	[/^\/tetris\/?$/, [c[0], c[223]], [c[1]]],

	// src/routes/tiktok.svelte
	[/^\/tiktok\/?$/, [c[0], c[224]], [c[1]]],

	// src/routes/trends.svelte
	[/^\/trends\/?$/, [c[0], c[225]], [c[1]]],

	// src/routes/twitch.svelte
	[/^\/twitch\/?$/, [c[0], c[226]], [c[1]]],

	// src/routes/videos.svelte
	[/^\/videos\/?$/, [c[0], c[227]], [c[1]]],

	// src/routes/walnut.svelte
	[/^\/walnut\/?$/, [c[0], c[228]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[229]], [c[1]]],

	// src/routes/beats.svelte
	[/^\/beats\/?$/, [c[0], c[230]], [c[1]]],

	// src/routes/bible.svelte
	[/^\/bible\/?$/, [c[0], c[231]], [c[1]]],

	// src/routes/books.svelte
	[/^\/books\/?$/, [c[0], c[232]], [c[1]]],

	// src/routes/bored.svelte
	[/^\/bored\/?$/, [c[0], c[233]], [c[1]]],

	// src/routes/cards.svelte
	[/^\/cards\/?$/, [c[0], c[234]], [c[1]]],

	// src/routes/chess.svelte
	[/^\/chess\/?$/, [c[0], c[235]], [c[1]]],

	// src/routes/clock.svelte
	[/^\/clock\/?$/, [c[0], c[236]], [c[1]]],

	// src/routes/emoji.svelte
	[/^\/emoji\/?$/, [c[0], c[237]], [c[1]]],

	// src/routes/fonts.svelte
	[/^\/fonts\/?$/, [c[0], c[238]], [c[1]]],

	// src/routes/games.svelte
	[/^\/games\/?$/, [c[0], c[239]], [c[1]]],

	// src/routes/house.svelte
	[/^\/house\/?$/, [c[0], c[240]], [c[1]]],

	// src/routes/islam.svelte
	[/^\/islam\/?$/, [c[0], c[241]], [c[1]]],

	// src/routes/links.svelte
	[/^\/links\/?$/, [c[0], c[242]], [c[1]]],

	// src/routes/lists.svelte
	[/^\/lists\/?$/, [c[0], c[243]], [c[1]]],

	// src/routes/loops.svelte
	[/^\/loops\/?$/, [c[0], c[244]], [c[1]]],

	// src/routes/memes.svelte
	[/^\/memes\/?$/, [c[0], c[245]], [c[1]]],

	// src/routes/merch.svelte
	[/^\/merch\/?$/, [c[0], c[246]], [c[1]]],

	// src/routes/music.svelte
	[/^\/music\/?$/, [c[0], c[247]], [c[1]]],

	// src/routes/notes.svelte
	[/^\/notes\/?$/, [c[0], c[248]], [c[1]]],

	// src/routes/pages.svelte
	[/^\/pages\/?$/, [c[0], c[249]], [c[1]]],

	// src/routes/radio.svelte
	[/^\/radio\/?$/, [c[0], c[250]], [c[1]]],

	// src/routes/ships.svelte
	[/^\/ships\/?$/, [c[0], c[251]], [c[1]]],

	// src/routes/stock.svelte
	[/^\/stock\/?$/, [c[0], c[252]], [c[1]]],

	// src/routes/store.svelte
	[/^\/store\/?$/, [c[0], c[253]], [c[1]]],

	// src/routes/terms.svelte
	[/^\/terms\/?$/, [c[0], c[254]], [c[1]]],

	// src/routes/think.svelte
	[/^\/think\/?$/, [c[0], c[255]], [c[1]]],

	// src/routes/todos/index.json.js
	[/^\/todos\.json$/],

	// src/routes/todos/index.svelte
	[/^\/todos\/?$/, [c[0], c[256]], [c[1]]],

	// src/routes/todos/[uid].json.js
	[/^\/todos\/([^/]+?)\.json$/],

	// src/routes/train.svelte
	[/^\/train\/?$/, [c[0], c[257]], [c[1]]],

	// src/routes/trees.svelte
	[/^\/trees\/?$/, [c[0], c[258]], [c[1]]],

	// src/routes/trust.svelte
	[/^\/trust\/?$/, [c[0], c[259]], [c[1]]],

	// src/routes/vegan.svelte
	[/^\/vegan\/?$/, [c[0], c[260]], [c[1]]],

	// src/routes/views.svelte
	[/^\/views\/?$/, [c[0], c[261]], [c[1]]],

	// src/routes/watch.svelte
	[/^\/watch\/?$/, [c[0], c[262]], [c[1]]],

	// src/routes/Home.svelte
	[/^\/Home\/?$/, [c[0], c[263]], [c[1]]],

	// src/routes/beer.svelte
	[/^\/beer\/?$/, [c[0], c[264]], [c[1]]],

	// src/routes/chat.svelte
	[/^\/chat\/?$/, [c[0], c[265]], [c[1]]],

	// src/routes/code.svelte
	[/^\/code\/?$/, [c[0], c[266]], [c[1]]],

	// src/routes/data.svelte
	[/^\/data\/?$/, [c[0], c[267]], [c[1]]],

	// src/routes/dayz.svelte
	[/^\/dayz\/?$/, [c[0], c[268]], [c[1]]],

	// src/routes/draw.svelte
	[/^\/draw\/?$/, [c[0], c[269]], [c[1]]],

	// src/routes/fans.svelte
	[/^\/fans\/?$/, [c[0], c[270]], [c[1]]],

	// src/routes/feed.svelte
	[/^\/feed\/?$/, [c[0], c[271]], [c[1]]],

	// src/routes/gifs.svelte
	[/^\/gifs\/?$/, [c[0], c[272]], [c[1]]],

	// src/routes/golf.svelte
	[/^\/golf\/?$/, [c[0], c[273]], [c[1]]],

	// src/routes/lofi.svelte
	[/^\/lofi\/?$/, [c[0], c[274]], [c[1]]],

	// src/routes/maps.svelte
	[/^\/maps\/?$/, [c[0], c[275]], [c[1]]],

	// src/routes/ping.svelte
	[/^\/ping\/?$/, [c[0], c[276]], [c[1]]],

	// src/routes/porn.svelte
	[/^\/porn\/?$/, [c[0], c[277]], [c[1]]],

	// src/routes/tour.svelte
	[/^\/tour\/?$/, [c[0], c[278]], [c[1]]],

	// src/routes/ufos.svelte
	[/^\/ufos\/?$/, [c[0], c[279]], [c[1]]],

	// src/routes/vlog.svelte
	[/^\/vlog\/?$/, [c[0], c[280]], [c[1]]],

	// src/routes/wine.svelte
	[/^\/wine\/?$/, [c[0], c[281]], [c[1]]],

	// src/routes/yoga.svelte
	[/^\/yoga\/?$/, [c[0], c[282]], [c[1]]],

	// src/routes/404.svelte
	[/^\/404\/?$/, [c[0], c[283]], [c[1]]],

	// src/routes/api.svelte
	[/^\/api\/?$/, [c[0], c[284]], [c[1]]],

	// src/routes/art.svelte
	[/^\/art\/?$/, [c[0], c[285]], [c[1]]],

	// src/routes/diy.svelte
	[/^\/diy\/?$/, [c[0], c[286]], [c[1]]],

	// src/routes/gym.svelte
	[/^\/gym\/?$/, [c[0], c[287]], [c[1]]],

	// src/routes/mix.svelte
	[/^\/mix\/?$/, [c[0], c[288]], [c[1]]],

	// src/routes/nft.svelte
	[/^\/nft\/?$/, [c[0], c[289]], [c[1]]],

	// src/routes/rad.svelte
	[/^\/rad\/?$/, [c[0], c[290]], [c[1]]],

	// src/routes/uno.svelte
	[/^\/uno\/?$/, [c[0], c[291]], [c[1]]],

	// src/routes/zoo.svelte
	[/^\/zoo\/?$/, [c[0], c[292]], [c[1]]],

	// src/routes/ai.svelte
	[/^\/ai\/?$/, [c[0], c[293]], [c[1]]],

	// src/routes/dj.svelte
	[/^\/dj\/?$/, [c[0], c[294]], [c[1]]],

	// src/routes/ml.svelte
	[/^\/ml\/?$/, [c[0], c[295]], [c[1]]],

	// src/routes/tv.svelte
	[/^\/tv\/?$/, [c[0], c[296]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];
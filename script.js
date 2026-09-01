const texts = [
   `The highest score by a School player in a single innings was Merritt's 342 in a 1926 club game, a total only four runs short of the then Canterbury record. Another record which must surely stand for a long time was established by J. G. Leggat in 1943, when he made a double century in each of two consecutive inter-school games during one term.`, // https://cbhsarchive.recollect.co.nz/nodes/view/32
   `Since the move to Straven Road the staff has undertaken a large (and increasing) share of the running of cricket-and especially in coaching. During the period 1926 to 1935 the coaching strength was probably at its best, for there were seven or eight masters regularly playing club cricket and we could easily have fielded a good staff team in the Senior B grade of those years.`, // https://cbhsarchive.recollect.co.nz/nodes/view/32
   `In 1896, when the school role was 267, B.H.S. was claimed to be the largest secondary school in New Zealand. Wellington College had one boy fewer. In 1899 a catapult made by Mr Hurst Seager and the Sloyd class for batting practice and was tried out. It dismissed the coach first ball!`, // https://cbhsarchive.recollect.co.nz/nodes/view/32
   `When farewelling the first Headmaster at the Christchurch railway station a group of senior boys were surprised to see one of their number join the Head's party. Until that moment, as T.W. Reese told the story, they had no idea that Miller, their fellow pupil, was the son of Miller, their Headmaster. The story certainly throws light on the character of Thomas Miller.`, // https://cbhsarchive.recollect.co.nz/nodes/view/32
   `The first boy enrolled was W.H. Montgomery, the son of the then Chairman of the Canterbury College Board of Governors, which was, of course, also the High School Board. The first Old Boys to gain degrees from the University of New Zealand were Robert Speight and J. Hartley Smith, both foundation pupils, who also became the first Old Boys to return to the School as masters.`, // https://cbhsarchive.recollect.co.nz/nodes/view/32
   `According to legend Sir Maui Pomare chose to come to Boys' High School, rather than to Christ's College, because, passing down the street he saw the bright scarlet of the School Cadet uniform tunics and was so attracted by the colour that he made up his mind then and there.`, // https://cbhsarchive.recollect.co.nz/nodes/view/32
   `Tom Latham applied the pressure from the other end taking 1 for 1 from his three overs. With Boys' High allowed to bat their allotted 40 overs, Tom Latham showed his class by notching up the only century on tour, a sublime 104 from only 91 balls. It was an innings of decisive shot-selection, combined with raw power and deft placement.`, // https://cbhsarchive.recollect.co.nz/nodes/view/150
   `In the latter part of 1894, the School had the services, as a relieving master, of a Canterbury College student whose name has since become world-famous - Ernest Rutherford. The following year he was to be awarded the 1851 Scholarship, which took him to the Old Country to pursue those researches which have since gained for him an outstanding place among the world's scientists.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `More than 1200 old boys, pre-sent pupils, and members of the staff attended the Christchurch Boys' High School seventy-fifth anniversary commemoration service in the Christchurch Cathedral yesterday afternoon. Between seven hundred and eight hundred old boys in decade groups dating back to 1881-1890 marched from the original site of the school in Worcester Street to the service.`, // https://cbhsarchive.recollect.co.nz/nodes/view/27#idx66
   `Hadlee completed a fine double for the match by taking 5 wickets for 59, and Calder did likewise by taking 3 wickets for 49. Unfortunately for School, Grammar's 'tail-enders' were hard to shift, and in fact their last 4 batsmen made 97 runs between them in Grammar's total of 173.`, // https://cbhsarchive.recollect.co.nz/nodes/view/109
   `Richard Hadlee played remarkably good football in goal - it was his first season in that position - and should become outstanding if a tendency towards over-confidence is overcome. Hewitt showed versatility by playing at various times in both the forwards and the backs. It became obvious as the season progressed that the first eleven was not scoring sufficient goals.`, // https://cbhsarchive.recollect.co.nz/nodes/view/108
   `The Waitaki innings was ruined before it started. Both Hadlee and Taylor took wickets in their first over. The batting was just as weak as their bowling and they were dismissed or 84. The Waitaki batsmen lost their wickets due to poor shots and lack of concentration, with the Captain, A. Livingstone, scoring 27, being the best bat.`, // https://cbhsarchive.recollect.co.nz/nodes/view/110
   `The annual three day match versus Auckland Grammar has challenged for more than a century, and is a keenly anticipated game by all the players. With CBHS winning outright in the previous two encounters, we were looking to repeat the dose this year with a strong squad, balanced by the inclusion of a few new players in Alex Ross, Matt McClintock and Josh Jones.`, // https://cbhsarchive.recollect.co.nz/nodes/view/149
   `Batting first on a bouncy wicket at Grammar, openers Tom Latham and Josh Jones got us off to a positive start until both were undone by the extra bounce from the clay surface. Enter the two leading scorers for the CBHS side Sam Noster and Corey Anderson. Noster demonstrated his class knocking up 54 at more than a run a ball, only to lose his wicket in a weak fashion.`, // https://cbhsarchive.recollect.co.nz/nodes/view/149
   `Noster had combined with Anderson to produce a quick-fire century stand, but it was Anderson who kicked on to get the big score. He took a while to settle, but once Anderson had a look at the bowlers he showed that there is no replacement for power as he smashed the Auckland slow bowlers at will.`, // https://cbhsarchive.recollect.co.nz/nodes/view/149
   `The Annual match between Christ's College and School was held Lancaster Park on July 4th before an attendance well up to that of previous years. Enthusiasm was at fever heat long before the teams took the field, and the incessant barracking by supporters of both sides was very pronounced.`, // https://cbhsarchive.recollect.co.nz/nodes/view/26
   `The School verses College Match was celebrated at the same venue. College Old Boys were invited but only one turned up! They must have realised that the match outcome would be a foregone conclusion based on the previous twelve year's efforts. The match was telecast live at the luncheon venue and the close score had the crowd on the edge of their seats.`, // https://cbhsarchive.recollect.co.nz/nodes/view/156
   `Boys' High School defeated Christ's College in their annual Rugby match, played under perfect conditions. The game was hard and even throughout with the School team showing more speed and initiative. Play was fast from the start, but in the first half the tackling was deadly, the only scores being penalty goals, Petch kicking one for School and Wanger one for College.`, // https://cbhsarchive.recollect.co.nz/nodes/view/75
   `This year's football season has now almost closed, and the School may feel justly proud of the position it occupies. Our First Fifteen is, perhaps, the best we have ever had at the School, as the record this season will show. It has not been defeated in any match whatsoever, and while it has scored a very large number of points, very few have been scored against it.`, // https://cbhsarchive.recollect.co.nz/nodes/view/35
   `We are very sorry to have to record a serious accident which happened to our head monitor (1895). De la Mare has been for some weeks an inmate of the Hospital. It is not certain how he sustained his injury, but it is supposed that it was caused by a fall which he had on Sport's Day.`, // https://cbhsarchive.recollect.co.nz/nodes/view/33
   `1895 College Match. This match, as might be expected, drew a larger attendance of boys and masters than any President Cup match the School had previously engaged in. High School won the toss and elected to bat, but owning to the bad wicket, the result of rains, did not make many runs.`, // https://cbhsarchive.recollect.co.nz/nodes/view/33
   `In May 1873, Canterbury College was established by Ordinance of the Provincial Council to advance the cause of superior education in the province. In 1874 the first lectures were delivered and the rapid development that followed in the next few years showed that the faith which had inspired the foundation of a university college in a small settlement barely a quarter of a century old, was abundantly justified.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `In June 1877, a letter from the teaching staff of Canterbury College pointed out to the Board of Governors that the great majority of the students at the College had only the most elementary knowledge of the subjects they proposed to offer for the degree course. The want of an intermediate school devoted exclusively to the higher branches of school work was keenly felt.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `During the latter part of 1880, the Board debated the advisability of establishing a school boarding-house, as the College Committee had recommended that tenders should be invited for the erection of such an establishment. Several members urged that boys who came from the country should always be under the supervision of the school authorities.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `Mr. Miller introduced one or two schemes that were at the time novel. The first was a system of classification of boys by subjects, so that a boy who might be weak in languages, but strong on the mathematical side, need not be kept in a low class for all of his work. This plan provided so equitable that it was ultimately adopted in most of the secondary schools in New Zealand.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `A second innovation was that there was no corporal punishment in the School. Instead, serious misdemeanours were recorded in a Black Book. According to a master of the School at the time, the result with Mr. Miller "was not merely the maintenance of order but a moral discipline that entered deep down into the lives and hearts of the members of the School"`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `The first School Sports were held at Lancaster Park on the 4th of November, 1881, and were most successful! Entries were good and finishes close. H. Matson won the President's Championship Cup which had been presented by Mr. W. Montgomery, the Chairman of the Board of Governors.`,  // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `In the first years of the School it was customary for the Inspectors' reports to be read at the annual prize giving. The report read the first year was that of the Inspector-General of Schools, W. J. Habens. From that time on the professors of Canterbury College acted as Examiners in their own subjects.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `In the first term of 1882 a School library was begun with 450 volumes. The books were bought from funds derived partly from a grant from the Board of Governors and partly from private subscription. Towards the end of the same year, another need was met by the erection of a drill-shed at a cost of 105 pounds 10s.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `Much to the regret of the School and numerous friends, Mr. Miller resigned in 1883. His resignation was due to an unfortunate disagreement with the Board arising from the lack of regulations defining the Headmaster's powers. Much ill-feeling was caused and several parents withdrew their boys from the School as a protest against what they considered to be the Board's high-handed action.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `Thomas Miller was a great gentleman whom the School was singularly fortunate in having as its first headmaster. His unique qualifications for the difficult pioneering work he was called on to perform have already been noted; and although his reign lasted only three years he laid the School's foundations firmly and well.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `Another improvement in 1888 was the installation of a new heating and ventilating system. The headmaster mentioned in his report on Speech Day that year, "that great improvement had been made in the buildings which now possess a system of ventilation which really does work, and of heating which does warm."`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `The roll continued to grow and in 1892 was more than double the number in 1886. Twenty-three boys from the country were boarding in town in order to attend school and there were many others who daily came considerable distances by train. On speech day, 1892, the Headmaster pleaded strongly for the consideration of a boarding house, but the plea fell on deaf ears.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `In 1894, an orderly room was erected at the cost of 235 pounds. A fine magic lantern for scientific and general educative purposes was also presented to the School by the Board of Governors. This lantern was most up-to-date in every respect, being indeed the only of its kind in New Zealand, and was very much appreciated.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `The story had been told of the fierce fight over the School Colours. The Seniors wanted the Pirates' Colours-black with skull and crossbones, while the juniors (influenced by the masters) voted for maroon. Both were lost by the narrow margin of one and an impasse occurred for a while. Ultimately the Colours, vote royal blue and black, were proposed and adopted.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `Distinctive school caps were not in vogue for some years, but straw hats were the fashion. A narrow royal blue ribbon was placed in the middle of the black band. In the late nineties a change had been made for the narrow blue bands were placed downwards at an angle of 45 degrees.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `Mr. Miller, the first Headmaster, was a most austere man. A real gentleman of the old type, dignified, he was little known by the boys. As he came schools where the use of the cane and strap was prevalent, it was strange to find that new methods were to be used. Punishment was meted out by the simple process of being kept in after hours with extra work thrown in.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `The chief crime committed during those first days was that of three boys who, living handy to the School, climbed the walls of the bath and enjoyed a swim late on a summer's night. They were caught and expelled till the end of the term. To-day those same three boys are worthy citizens in different parts of New Zealand.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `The period from 1885 to 1905 was one of quiet uninterrupted progress, of which additions to buildings and grounds, increases in numbers - the School, with a role of 250 was now the largest secondary school in New Zealand - scholastic triumphs, and the successes of Old Boys in every walk of life were the outward and visible signs.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `After the speeches were finished the visitors went on a round of inspection. In the two laboratories, chemistry experiments were being conducted, whilst some physical apparatus was exhibited in Room K. Two magic lanterns were at work, one in Room F, and the other in the Lecture Theatre.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `On June 24th, 1900, news was received at the School of the death of Mr. Thomas Miller, the first headmaster. An account of his career has already been given. Few finer scholars have ever lived in New Zealand. His death was a great loss to scholarship and genuine grief to all his Old Boys.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `In the Winter term next year, following a heavy fall of snow one of the historic battles with Christ's College was fought. There were two engagements, with about half-an-hour's interval between. In the first one on the College quad, unfortunately the School was beaten, but this can hardly be considered a fair test, as we ran out of ammunition.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `By far the most important event this year was the visit to Christchurch of the Duke and Duchess of Cornwall and York. For a week before the Royal Visit the cadets were kept busy drilling both by themselves and in company with other cadets from various parts of New Zealand in preparation for a Grand Review in Hagley Park on the afternoon of Monday, June 24th, 1900.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `Several changes were made in the organisation of the School in the first term of 1902. The old synchronous system, under which one subject was being taught throughout the School at one time, gave place to the "class" system. Every boy was no longer classified under the separate headings of his separate subjects.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `In addition of an acre was made to the School playing grounds this year, and a spirited ceremony held in the grounds, in the course of which the Chairman of the Board of Governors formally declared the ground open, and the fence was carried off in sections by the boys.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `The year 1905 is a landmark in the history of the Old Boys of the School. The presence in Wellington of Harper, Deans and Thomson prior to their departure as members of the famous 1905 "All Blacks," suggested a re-union of Old Boys. An informal committee met, appointed H. P. Richmond Secretary and General Manager, and had made arrangements for a dinner.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `The routine of the Winter Term of 1912 was broken one morning, by a fall of snow, which had resulted in a battle royal with Christ's College, the victory being apparently with the School. On May 31st, the cadets were inspected by General Baden-Powell, who complimented them on their fine physique and bearing.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `As early as the end of 1915, proposals were on foot for a memorial to those who had served their country in the war. This resulted in the building of the Memorial Shrine in 1926. The roll of Honour was being most carefully compiled and at the beginning of the year 112 Old Boys were found to be serving in the various forces.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `On April 25th, the first day of the Anzac Day Services was held in the Big Room, where among the gathering, was a number of Old Boys who had returned from the Front. Addresses were given by the Headmaster, the Chairman of the Board of Governor, and Sergeant R. H. Livingstone, who had been in the Gallipoli Campaign.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `By now there were over 400 Old Boys on the Roll of Honour. Word was being received all too frequently that now one, now another, had made the supreme sacrifice. Of those who had left the School most recently Lieut. R. G. Hickmott, a Senior Monitor, was reported killed in action.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `The boys continued to devote their Sports Prize Money to the Christmas Parcel for Old Boys at the War. At this time the number was 644. Very few days went by on which there was not some death to report; but at the same time promotions and decorations were continually being notified.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `During this, the last year of the Great War, the sad news of the fall of Old Boys at the Front was still being continually received. From time to time, small groups of returned men were welcomed back by the Headmaster at prayers in the Big Room on Friday afternoons; while others who were still leaving for the Trentham camp were farewelled.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `Plans of the new buildings at Riccarton were in course of preparation by the brothers Guthrie, local architects and prominent Old Boys of the School. The sum of about 900 pounds had been subscribed by Old Boys, about one third the sum required to build the Memorial Gate.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `The reassembly of School at the beginning of the year was saddened by the news that the Headmaster was lying seriously ill in Dunedin, and had undergone a severe operation. There was not a boy nor master who did not feel his absence intensely, and all hopes were centred on his speedy recovery.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `On the last day of the year the boys assembled in the Big Room to bid farewell to their Headmaster. In that same room he made his debut as Headmaster 35 years before, and had seen the School grow from 100 to 450 boys. To very few men it is given to control the destiny of a school for 37 years.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `In the evening, the Headmaster was present at his last prize-giving in the Canterbury College Hall. In the course of his report he expressed the delight that he felt at leaving the headmastership and the traditions of the School in the safe-keeping of Mr. Lancaster.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `Next year the School assembled in the gymnasium with a roll of 505 boys who completely packed the large building; even the gallery at the rear was filled. The gymnasium from now on had to accommodate three classes, one of which was placed on the stage, the other two being separated by a curtain only.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `Early in 1924 it was definitely decided that the Old Boys' War Memorial should take the form of a Shrine to be built on the north boundary of the new grounds and facing the main entrance to the School building. It was proposed to plant cypress trees and Gallipoli oaks on either side of the shrine.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `The exodus from old to new School occupied some time. All furniture and fittings had to be used in the new School, and load after load was removed from Worcester Street. Many long-forgotten stories were recalled by the sight of equality long-forgotten articles suddenly uncovered during the bustle of shifting.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `Tuesday, February 2, 1926, marked the opening of the New School. A large attendance witnessed the ceremony, conducted from the main entrance by Sir James Parr. After an outline of the School's growth by Mr. H. D. Acland, Chairman of the Board of Governors, Sir James spoke at some length on the objects and ideals of education.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `Prior to the official opening of the School, Mr. C. E. Bevan-Brown had, on January 31, unveiled the Memorial Shrine in the grounds. Mr. Bevan-Brown spoke, as he alone was able to speak of fallen Old Boys and the Shrine that was to commemorate their sacrifice. Some 800 Old Boys served in the Great War; 142 made the supreme sacrifice.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `Since the occupation of the New School, every year has shown progress in the improvement of playing areas and the construction of utilities around the School Buildings. The year 1927 saw perhaps the most strenuous activities on the part of pupils, Staff and Board for the benefit of the School.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `The roll of 720 at the re-opening of the School in 1929, marked the greatest number of pupils during its fifty years' existence. The curriculum provided for the variety of courses, from the classical to the modern, which embraces a certain amount of manual training. For all forms English and History alone are compulsory.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `The Christchurch Boys' High School, which is one of the youngest of the great Schools of New Zealand, was indeed fortunate in one important respect. Far beyond most other Schools, it was able, through the wisdom and sympathy of the Board of Governors, to develop its athletic side almost from the beginning.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `In 1893 the Monitors began seriously to discuss the founding of a School Magazine, and in that year a publication was posted on a large notice board. Whether the manuscript of this is still in existence or not we do not know, but its literary successor, the School Magazine, first appeared in 1894, and from this year onwards ample material is available for the seeker after historical truth.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `In the year 1926 occurred the most important change, perhaps, in the athletic history of the School, namely the shifting of the School to the present site at Riccarton. By this change much was gained - 27 acres of excellent playing fields in a gain for which much may well be given up - and many things lost.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `A striking feature of the athletic life of the School in recent years has been the growth of inter-School competition in many activities. In football, cricket, boxing, swimming and athletics there are regular competitions and meetings among all Secondary Schools of Christchurch.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `Although Cricket in Canterbury was of a high standard in the early eighties yet it can be understood that in a new School of some 80 boys, mostly 13 and 14 years of age, and suddenly brought together, the cricket standard would not be high though the boys were very keen. Two elevens were fielded but only the Lower School of Christ's College was tackled by them.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `Arthur Sims now led the team and by this time he was one of the most prolific scorers, ablest captains and best all-rounders who have been at the School. In later years, he became well-known as a Canterbury and New Zealand representative and has also been instrumental in arranging tours, visits of Australian sides of more than one of which, he was a playing member.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `The Annual Athletic Sports have formed one of the principal features of the School year right from 1881. In that year the meeting was held at Lancaster Park, the Headmaster defraying the total cost of 60 pounds. Several of the trophies which have lasted down to the present day appeared at this first meeting, notably the Senior Championship Cup.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `In 1917, a short meeting, consisting of six events, the 100 yds, 440 yds, 1 mile, 120 yds, hurdles, high jump, and putting the shot, was help between the two Schools. Although several of the events were very evenly contested, College managed to secure first and second in every one.`, // https://cbhsarchive.recollect.co.nz/nodes/view/31
   `While on a recent visit to New Plymouth, an opportunity was offered to me of going up the Mokau River, the boundary between Auckland and Taranaki, on whose banks large, though almost undeveloped, coal-fields exist. We were discussing the trip when a telegram arrived to say that the streamer "Manukan" would leave in a couple of hours.`, // https://cbhsarchive.recollect.co.nz/nodes/view/33
   `As I sat on deck between moonlight and sunset, oppressed by strange sensations, there flashed across my mind Tennyson's lovely poem, in which he says "And sweet it was to dream of firmer land." Indeed, during the whole trip I was haunted by quotations from the Lotos-Easters, as the VI. English may imagine.`, // https://cbhsarchive.recollect.co.nz/nodes/view/33
   `At length morning came, and, crossing the bar, we entered a broad sheet of water, shut in by high hills and cliffs. A few minutes later we were once more on solid earth. A short distance from us was a Maori Pa belonging to the Ngatimaniopoto tribe, whose ancestors came here long ago in the canoe "Tainui."`, // https://cbhsarchive.recollect.co.nz/nodes/view/33
   `We strolled past this village and walked up the hill to the settlement, which consists of a few cottages, a store, and two accommodation houses. At one of these we had a scanty breakfast. Everything was very dirty, and the yard was filled with a medley of pigs, children, dogs, fowls, sheep, and loafing Maoris and bushmen.`, // https://cbhsarchive.recollect.co.nz/nodes/view/33
   `After the first bend the river becomes narrower, and on either side are high hills covered from top to bottom with a forest of matai, tawa, rimu, and mighty ratas, crimsoned with thousands of flowers. Mile after mile of wooded hills, kowhai flats, of streams and rivulets, pass by.`, // https://cbhsarchive.recollect.co.nz/nodes/view/33
   `The holidays have come and gone, and we are again speeding on towards the vacation. We came back on Wednesday, May 29th, to settle down to a term's hard work. The second term may well be called the "holidays" one of the year, as the boys have mainly to trust to their good conduct to get a day off.`, // https://cbhsarchive.recollect.co.nz/nodes/view/33
   `With this issue we start the second year of the Boys' High School Magazine. The first year has been got through by some means, and now that we have got so far, the Magazine is likely to survive. The last issue was attended with much greater success than the two first - in fact, Mr. Grossmann had to order a second edition.`, // https://cbhsarchive.recollect.co.nz/nodes/view/33
   `When the boys came back to School, they found their domains in terrible disorder. The play-ground was littered up with sand, masonry and scaffolding, and the school itself, from the outside, looked anything but genteel. However, the new building will compensate for all this temporary mess and confusion.`, // https://cbhsarchive.recollect.co.nz/nodes/view/33
   `Last season was perhaps the most successful year in the annals of the School in regard to its cricket. The School team for the President's Cup went through the season with only one defeat and that by the narrow margin of one wicket; had this game been concluded on the second day the School would have just about won.`, // https://cbhsarchive.recollect.co.nz/nodes/view/33
   `Early in the morning, before the sun rose, we were awakened by an exquisite chorus from hundreds of tuis. The rain had ceased, and their clear bell-like notes and melodious whistles resounded from every side. This concert lasted for a considerable time, and meanwhile, having made a hearty meal off our hard fare, we packed out canoe and set off once more.`, // https://cbhsarchive.recollect.co.nz/nodes/view/33
   `At the end of the 1894 season, we expressed the opinion that it was the most important in the history of the School, since then for the first time we entered on matches with Northern Schools. This season, however, has seen us continue those matches, which promise now to be annual fixtures.`, // https://cbhsarchive.recollect.co.nz/nodes/view/33
   `Drake intercepted a pass and ran to the centre, and the School forwards dribbled further. Nelson then came on with a passing rush, in which Armstrong, Fell, Gully, and Mules took part, and the latter making a fine run was eventually collared by Forbes. The spell ended with no further alteration in the score. `, // https://cbhsarchive.recollect.co.nz/nodes/view/33
   `With the reassembly of the School this term, once more all thoughts were turned in the direction of cricket. Though the "third term" is usually an expression which drives away thoughts of pastimes, yet this term has surpassed all others in the enthusiasm which all have shown with regard to cricket.`, // https://cbhsarchive.recollect.co.nz/nodes/view/33
   `It was a summer morning in the sixties. Afar off a rugged cape, with dim and misty hills, stretched out into the sea. The sun rose behind it, and the great breakers sparkled as they swept in swilling curves up on to the dark sand of the bay. A grove of glossy karakas flashed back the level rays, and beneath them glowed the white tents of a British camp.`, // https://cbhsarchive.recollect.co.nz/nodes/view/33
   `At the end of last year the Magazine account showed a heavy deficit, and it was therefore decided that no Magazine should be published last term. This arrangement gives a surplus of material for the present issue - a surplus which, became of the deficit, must be boiled down to reasonable limits.`, // https://cbhsarchive.recollect.co.nz/nodes/view/34
   `Last term, the new buildings were finished and formally opened by the Chairman of the Board of Governors. They comprise a basement Laboratory, a Science Lecture Hall, and two Class Rooms. These additions have greatly improved the appearance of the school, and rouse quite a patriotic pride in the bosoms of the boys.`, // https://cbhsarchive.recollect.co.nz/nodes/view/34
   `At the beginning of the year, there were seventy-two new boys. But sad to say, sixty-two had left, most of them whom were senior boys. This has left a great gap in our ranks, but still we are nevertheless sanguine of success in every direction. The Magazine should benefit by the number of senior boys who left last year.`, // https://cbhsarchive.recollect.co.nz/nodes/view/34
   `The annual distribution of prizes took place on Wednesday evening, the 18th of December, 1896. Mr. Grossmann read the reports of the examiners, which were excellent in every department. After this Mr. Bevan-Brown addressed the boys. He mentioned the new buildings, and held out to the boys a hope of the long wished for gymnasium.`, // https://cbhsarchive.recollect.co.nz/nodes/view/34
   `After this the prizes were distributed, amidst, loud demonstrations of approval, though, no doubt, the terribly oppressive weather prevented some enthusiasm from making itself heard. Mr. T. S. Weston also addressed a few encouraging remarks to the boys. After the distribution a little entertainment was gone through.`, // https://cbhsarchive.recollect.co.nz/nodes/view/34
   `He was followed by the Principal who briefly acknowledged the compliments paid him by the preceding speakers. Then W. Wilson (senior monitor), on behalf of the Commemoration Committee, presented to Mr. Bevan-Brown, an address to mark the unveiling of the portrait and the opening of the new buildings.`, // https://cbhsarchive.recollect.co.nz/nodes/view/34
   `On March 10th, 1896,the boys held the Annual Swimming Races. The Dock at Lyttelton was occupied, so all the races had to be held at Corsair Bay. The boys, under care of the masters and monitors, went down by the 10.10 a.m. train, and walked round to the bay. On arriving there the sports Committee at once set about marking off the course.`, // https://cbhsarchive.recollect.co.nz/nodes/view/34
   `Those of our readers who can recollect the prowess of Craddock and Waddell in the Eleven and the Fifteen, may be interested in seeing that their capacity for hard play has not interfered in the least with their work. Craddock played for Canterbury College First Fifteen during his College course, and his place will be hard to fill.`, // https://cbhsarchive.recollect.co.nz/nodes/view/34
   `Being our best team a description of the several players would not be out of place. Sims, a splendid batsman with plenty of dash, also a very good break bowler and brilliant field. Ryan, a hard hitter; kept wickets. De la Mere, a fair batsman, but owing to his accident, rather weak in the field. Manson, good fast and difficult bowler; fair bat and good field.`, // https://cbhsarchive.recollect.co.nz/nodes/view/34
   `CBHS Past v. Present. This match took place at Hagley Park on Easter Monday, when the Old Boys inflicted a very ignominious defeat on the Present Boys by 1 innings and 5 wickets. In this match the School was represented by only eight players, and two of them play for the third eleven. Besides this the ground was very sodden, and it was almost impossible to get a footing.`, // https://cbhsarchive.recollect.co.nz/nodes/view/34
   `On returning to School this year, we found that a change had taken place in the afternoon School time-table. We commenced School at 2.10 p.m., to suit the numerous "tram-boys." Soon, however, this was found inconvenient and the old order of things was reinstated. I would suit the majority of boys, and would be a great help to all outside games if afternoon school began at 1.80 p.m.`, // https://cbhsarchive.recollect.co.nz/nodes/view/35
   `Once again we say farewell and good luck to the boys who left and welcome all those who come. While wishing the Old Boys every success we hope that those who fill their places will strive, as they have done in the past, to uphold the credit of the B.H.S. Only four of last year's Monitors came back to School this year, and since then one of them, Lewin C., has left.`, // https://cbhsarchive.recollect.co.nz/nodes/view/35
   `The morning of Monday, October 12th, 1897, was decidedly gloomy, but in the afternoon the clouds cleared off and at two o'clock the sun was shining as brightly as could be wished. As usual, in the afternoon, a great number of visitors and friends came down to the Park to watch the races.`, // https://cbhsarchive.recollect.co.nz/nodes/view/35
   `This year, as usual, the chief races were swum at Lyttelton, and the minor events, such as the hack race, neat drive and life-saving competition, took place in the School Baths. In all cases the results were high in satisfactory. In one or two events former records were broken. The first instalment came off Monday, February 22nd, 1897, in the Baths.`, // https://cbhsarchive.recollect.co.nz/nodes/view/35
   `At the end of 1895, very many of our best men, among whom were Sims, Manson, Ryan and De la Mare, left school. Consequently in the first term of 1896 we did not have half so good a team as at the beginning of the season. Once again was the usual cry raised, "What shall we do for a team?" "Will there be anyone at all at school?"`, // https://cbhsarchive.recollect.co.nz/nodes/view/35
   `This team up to the end of 1896 was quite a remarkable one, leading in the President's Cup competition up to the date mentioned. This was owing to the bowling strength of the team, as represented by Goodman, Russel, and Byrne W., and the good batting of the two Friedlanders, Goodman, and Byrne W.`, // https://cbhsarchive.recollect.co.nz/nodes/view/35
   `We should have gone there by train, only a bridge was broken down. We got to Gaberone at nine o'clock, and after rations of corned beef and bread were turned into waggons and slept. Since then we moved across the river to Fort Gaborone, consisting of one house, a distance of a mile, and we have been there ever since.`, // https://cbhsarchive.recollect.co.nz/nodes/view/35
   `In one way it is rather difficult to give an account of this year's football and yet to do it full justice. We have had to follow one of the best school teams that the colony has seen in late years, and our doings will rather suffer in comparison. It would be hardly proper to omit here all mention of successes of its ex-members.`, // https://cbhsarchive.recollect.co.nz/nodes/view/36
   `Some time ago a new board was put up in the basement, on which boys might carve their names. The one already there had been filled with the names of so many young aspirants for fame that it was found necessary to erect a new one. Already this board has been widely used, and a large number of boys, particularly new boys, have carved their names "in the niches of fame."`, // https://cbhsarchive.recollect.co.nz/nodes/view/36
   `Talking about boards, we hope soon to welcome the arrival of an honours' board, so kindly presented to the School by Mr. Menzies. This board will be erected in the big room, and on it will be inscribed the names of all those past boys who have brought "kudos" to the School.`, // https://cbhsarchive.recollect.co.nz/nodes/view/36
   `At the two meetings of the Debating Club which have been held, some "howlers" have been made. One member, carried away by the flow of his eloquence, spoke of "religion and other vices." Another member, in his anxiety to get to the subject, jumped to his feet and began, "Mr. Gentleman and Chairmen."`, // https://cbhsarchive.recollect.co.nz/nodes/view/36
   `A motion was carried by seventeen to sixteen that Royal Blue and Black be the colours. It may be interesting to my new readers to know that blue and black jerseys were not obtainable for many months. This difficulty was soon got over, for College jerseys (black and white) could be soon transformed into the required hues.`, // https://cbhsarchive.recollect.co.nz/nodes/view/36
   `It was very satisfactory to mark the large number of Old Boys who were present at the sports. Now a few had come from considerable distances, and all seemed to have taken a key interest in the performances of the boys. A very pleasant gathering of Old Boys was held in the big school-room on sports night.`, // https://cbhsarchive.recollect.co.nz/nodes/view/36
   `The annual prize distribution for 1898 is probably still fresh in the memory of most of our readers. A full report of the proceedings appeared in the Press and the Lyttelton Times on Tuesday, December 21st, and therefore it will be unnecessary to give a detailed account here. As usual the night was hot, and the Hall uncomfortably crowded.`, // https://cbhsarchive.recollect.co.nz/nodes/view/37
   `Our first match this term was against Midland, in which the School was beaten. But seeing that it was played soon after returning to school after the Christmas holidays, the team had not much time to get into form, as a result of which the fielding and batting in the first innings were far from good.`, // https://cbhsarchive.recollect.co.nz/nodes/view/37
   `The School Library, we are happy to say, has this year entered on a career of renewed vitality. There are already nearly one hundred more subscribers than there were last year, the numbers being 137 as against 40. It bids fair to become one of the most popular, as it is certainly one of the most useful, institutions connected with the School.`, // https://cbhsarchive.recollect.co.nz/nodes/view/37
   `In Melbourne the University is a teaching, as well as an examining, body. The buildings, generally known to students as "The Shop," stand on somewhat extensive, but beautifully kept, grounds about a mile from the centre of the city. Though almost in the midst of the most bustling city in Australia, the University and colleges form a world in themselves.`, // https://cbhsarchive.recollect.co.nz/nodes/view/37
   `We should like to suggest that as the number of bicycles brought to School is greater than ever, and the existing accommodation is totally inadequate, a new shed should be erected, say beside the gymnasium, where, on payment of a shilling a term, each boy could have a certain stand assigned to him.`, // https://cbhsarchive.recollect.co.nz/nodes/view/38
   `The annual prize distribution for 1899 took place at the Canterbury College Hall on Wednesday, December 21st. A full report of the proceedings have appeared in the newspapers of the following days, it is unnecessary to enter into details here. As usual, the hall was crowded, and even the space down one centre of the hall was filled with the many friends of the boys.`, // https://cbhsarchive.recollect.co.nz/nodes/view/38
   `A full list of subscribers will be printed with the First Number of 1901, when we hope there will be 300 on the list. Old Boys who know of others who they think would take the Magazine would greatly help us by sending their names. We shall also be glad to receive notes about Old Boys, which can be sent to the Old Boys' secretary for the Magazine.`, // https://cbhsarchive.recollect.co.nz/nodes/view/38
   `One of the most important questions in connection with the School is that of colours for Old Boys. Not only have Old Boys all over the colony expressed a wish that some move should be made in the matter, but as many of the present boys will be leaving in the course of the next few weeks, they may also be expected to show some interest in the question.`, // https://cbhsarchive.recollect.co.nz/nodes/view/38
   `On Monday, August 27th, the team left Lyttelton in the S.S. Rotorua. We were accompanied by some of the school as far as the wharf, and when we had finally cast off and exchanged cheers we settled down to realise the dismal prognostications of what was coming, with which everybody had been entertained all day.` // https://cbhsarchive.recollect.co.nz/nodes/view/38
   // ``, // https://cbhsarchive.recollect.co.nz/nodes/view/38
   // ``, // https://cbhsarchive.recollect.co.nz/nodes/view/38
   // ``, // https://cbhsarchive.recollect.co.nz/nodes/view/38
   // ``, // https://cbhsarchive.recollect.co.nz/nodes/view/38
   // ``, // https://cbhsarchive.recollect.co.nz/nodes/view/38
   // ``, // https://cbhsarchive.recollect.co.nz/nodes/view/38
   // ``, // https://cbhsarchive.recollect.co.nz/nodes/view/38
   // ``, // https://cbhsarchive.recollect.co.nz/nodes/view/38
   // ``, // https://cbhsarchive.recollect.co.nz/nodes/view/38
   // ``, // https://cbhsarchive.recollect.co.nz/nodes/view/38
   // ``, // https://cbhsarchive.recollect.co.nz/nodes/view/38
   // `` // https://cbhsarchive.recollect.co.nz/nodes/view/38
];



let currentText = '';
let currentIndex = 0;
let startTime = null;
let timeLeft = 100;
let timer = null;
let isActive = false;
let errors = 0;
let rightChars = 0;
let totalChars = 0;

const textContent = document.getElementById('textContent');
const typingInput = document.getElementById('typingInput');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const wpmElement = document.getElementById('wpm');
const accuracyElement = document.getElementById('accuracy');
const charactersElement = document.getElementById('characters');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const timerElement = document.getElementById('timer');
const resultsModal = document.getElementById('resultsModal');
const tryAgainBtn = document.getElementById('tryAgainBtn');

function loadNewText() {
   currentText = texts[Math.floor(Math.random() * texts.length)];
   displayText();
}

function displayText() {
   textContent.innerHTML = currentText
       .split('')
       .map((char, index) => 
           `<span class="char pending" data-index="${index}">${char}</span>`
       )
       .join('');
}

function startTest() {
   isActive = true;
   startTime = Date.now();
   typingInput.disabled = false;
   typingInput.placeholder = "Start typing...";
   typingInput.focus();
   startBtn.style.display = 'none';
   progressText.textContent = 'Test in progress...';
}

function startTimer() {
   timer = setInterval(() => {
       timeLeft--;
       timerElement.querySelector('span').textContent = timeLeft;
       
       if (timeLeft <= 0) {
           endTest();
       }
   }, 1000);
}

function handleInput(e) {
   if (!isActive) return;
   
   const inputValue = e.target.value;
   currentIndex = inputValue.length;
   
   updateDisplay(inputValue);
   updateStats();
   updateProgress();
   
   if (currentIndex >= currentText.length) {
       endTest();
   }
}

function updateDisplay(inputValue) {
   const chars = document.querySelectorAll('.char');
   errors = 0;
   rightChars = 0;
   totalChars = currentIndex;
   
   chars.forEach((char, index) => {
       char.className = 'char';
       
       if (index < inputValue.length) {
           if (inputValue[index] === currentText[index]) {
               char.classList.add('correct');
               rightChars++;
           } else {
               char.classList.add('incorrect');
               errors++;
           }
       } else if (index === inputValue.length && index < currentText.length) {
           char.classList.add('current');
       } else {
           char.classList.add('pending');
       }
   });


   if (totalChars > 0 && !timer) {
      startTimer();
   }
}

function updateStats() {
   const timeElapsed = (Date.now() - startTime) / 1000 / 60;
   const grossWPM = ((totalChars / 5) / timeElapsed);
   const netWPM = Math.max(0, Math.round((rightChars / 5) / timeElapsed));
   const accuracy = totalChars > 0 ? Math.round(((totalChars - errors) / totalChars) * 100) : 100;
   
   wpmElement.textContent = isFinite(netWPM) ? netWPM : 0;
   accuracyElement.textContent = `${accuracy}%`;
   charactersElement.textContent = totalChars;

}

function updateProgress() {
   const progress = (currentIndex / currentText.length) * 100;
   progressFill.style.width = `${Math.min(progress, 100)}%`;
   
   if (progress >= 100) {
       progressText.textContent = 'Complete!';
   } else {
       progressText.textContent = `${Math.round(progress)}% complete`;
   }
}

function endTest() {
   isActive = false;
   typingInput.disabled = true;
   clearInterval(timer);
   
   updateStats();
   
   showResults();
}

function showResults() {
   const finalWpm = wpmElement.textContent;
   const finalAccuracy = accuracyElement.textContent;
   const finalCharacters = charactersElement.textContent;
   
   document.getElementById('finalWpm').textContent = finalWpm;
   document.getElementById('finalAccuracy').textContent = finalAccuracy;
   document.getElementById('finalCharacters').textContent = finalCharacters;
   
   resultsModal.classList.add('show');
}

function resetTest() {
   isActive = false;
   currentIndex = 0;
   errors = 0;
   rightChars = 0;
   totalChars = 0;
   timeLeft = 100;
   startTime = null;
   
   clearInterval(timer);
   
   typingInput.value = '';
   typingInput.disabled = true;
   typingInput.placeholder = "Click start to begin typing...";
   startBtn.style.display = 'inline-flex';
   timerElement.querySelector('span').textContent = '100';
   progressText.textContent = 'Ready to start';
   
   wpmElement.textContent = '0';
   accuracyElement.textContent = '100%';
   charactersElement.textContent = '0';
   progressFill.style.width = '0%';
   
   loadNewText();
   resultsModal.classList.remove('show');
}

function closeResults() {
   resultsModal.classList.remove('show');
   resetTest();
}

startBtn.addEventListener('click', startTest);
resetBtn.addEventListener('click', resetTest);
typingInput.addEventListener('input', handleInput);
typingInput.addEventListener('paste', (e) => e.preventDefault());
tryAgainBtn.addEventListener('click', closeResults);
signinBtn.addEventListener('click', () => {
   window.location.href = 'signin.html';
});


document.addEventListener('DOMContentLoaded', () => {
   loadNewText();
});

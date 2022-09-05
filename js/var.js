let q1 = `
   <form action="">
         <p>1. Вы  сначала говорите, а потом думаете; узнаете, что вы хотель сказать, только когда слышите эти слова из своих уст; порою вы ругаете себя за неумение держать язык за зубами,</p>
         <p><label><input type="radio" name="q1" value="e">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>

   </form>`
let q2 = `
   <form action="">
         <p>2. Вы обдумываете мысль, прежде чем ее высказать, и хотели бы, -чтобы другие поступали так же; вы часто говорите: «Мне нужно об этом подумать» или «Я скажу вам позже»;</p>
         <p><label><input type="radio" name="q1" value="i">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>

   </form>`
let q3 = `
   <form action="">
         <p>3. Вы знаете множество людей и многих из них считаете своими близкими друзьями; вам нравится жить и действовать в окружении множества людей;</p>
         <p><label><input type="radio" name="q1" value="e">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>
   </form>`
let q4 = `
   <form action="">
         <p>4. Вы получаете удовольствие от тишины и спокойствия, когда вы одни; вы считаете, что окружающий мир слишком часто вторгается в ваше личное пространство, и, чтобы приспособиться к этому, развиваете в себе умение сосредотачиваться, блокируя шум телевизора, детских игр или чужого разговора;<p>
         <p><label><input type="radio" name="q1" value="i">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>
   </form>`
let q5 = `
   <form action="">
         <p>5. Вы можете читать или разговаривать, когда в комнате включен телевизор или радио; в действительности вы можете вовсе не замечать этого «отвлекающего» фактора;</p>
         <p><label><input type="radio" name="q1" value="e">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>
   </form>`
let q6 = `
   <form action="">
         <p>6. Вы считаетесь «прекрасным слушателем», но чувствуете, что окружающие вами пользуются;</p>
         <p><label><input type="radio" name="q1" value="i">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>
   </form>`
let q7 = `
   <form action="">
         <p>7. Вы легко знакомитесь и заводите разговор, вы одинаково открыты с приятелями и незнакомцами, хотя иногда несколько подавляете собеседника;</p>
         <p><label><input type="radio" name="q1" value="e">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>
   </form>`
let q8 = `
   <form action="">
         <p>8. Вы хотя бы несколько раз слышали, как другие называют вас «робким»; согласны вы с этим или нет, другим вы можете казаться замкнутым и задумчивым;</p>
         <p><label><input type="radio" name="q1" value="i">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>
   </form>`
let q9 = `
   <form action="">
         <p>9. Вы воспринимаете телефонные звонки как желанную передышку; вы без колебаний хватаете телефонную трубку, как только вам захочется кому-то что-то сказать;</p>
         <p><label><input type="radio" name="q1" value="e">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>
   </form>`
let q10 = `
   <form action="">
         <p>10. Вы любите отмечать праздники и памятные даты наедине с одним близким человеком или в узком кругу хороших друзей;</p>
         <p><label><input type="radio" name="q1" value="i">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>
   </form>`
let q11 = `
   <form action="">
         <p>11. Вы любите вечеринки, предпочитаете разговаривать со многими людьми, чем их больше — тем лучше; вы заводите разговор не только со знакомыми и можете рассказать что-то довольно-таки личное о себе незнакомцу, внушившему доверие;</p>
         <p><label><input type="radio" name="q1" value="e">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>
   </form>`
let q12 = `
   <form action="">
         <p>12. Вы хотели бы научиться более уверенно высказывать свои мысли; вас возмущает, когда кто-то опережает вас и говорит то, что вы как раз собирались сказать;</p>
         <p><label><input type="radio" name="q1" value="i">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>
   </form>`
let q13 = `
   <form action="">
         <p>13. Вы предпочитаете генерировать идеи в группе, а не самостоятельно; вас сильно утомляют долгие размышления, которыми вы не можете поделиться с другими;</p>
         <p><label><input type="radio" name="q1" value="e">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>
   </form>`
let q14 = `
   <form action="">
         <p>14. Вы  предпочитаете, чтобы вас не перебивали, когда вы высказываете свои мысли, и обеспечиваете такую возможн другим в надежде, что они ответят вам тем же, когда придет ваш черед говорить;</p>
         <p><label><input type="radio" name="q1" value="i">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>
   </form>`
let q15 = `
   <form action="">
         <p>15. Вы считаете, что слушать тяжелее, чем говорить; вам не нравится быть лишенным внимания, вам скучен разговор, если вы не можете принимать в нем активного участия;</p>
         <p><label><input type="radio" name="q1" value="e">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>
   </form>`
let q16 = `
   <form action="">
         <p>16. Вы испытываете потребность «подзарядиться» в одиночестве после того, как проведете какое-то время среди людей; чем более интенсивным было общение, тем больше вероятность, что вы почувствуете себя утомленным после встречи;</p>
         <p><label><input type="radio" name="q1" value="i">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>
   </form>`
let q17 = `
   <form action="">
         <p>17. Вы «смотрите» языком, а не глазами: «Я потерял очки. Кто-нибудь видел мои очки? Кто знает, где мои очки?», — а когда отвлекаетесь на что-то, вы вслух восстанавливаете свой ход мысли: «Так о чем я говорила? По-моему, это было связано со вчерашним ужином. Ах, да, я вспоминала, что сказала Гарриет»;</p>
         <p><label><input type="radio" name="q1" value="e">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>
   </form>`
let q18 = `
   <form action="">
         <p>18. Вы помните, как в детстве родители говорили вам: «Иди погуляй с друзьями, не сиди дома»; наверное, ваши родители беспокоились о вас, потому что вам нравилось быть в одиночестве;</p>
         <p><label><input type="radio" name="q1" value="i">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>
   </form>`
let q19 = `
   <form action="">
         <p>19. Вы нуждаетесь в том, чтобы друзья и партнеры поддерживали вашу уверенность в себе, своей внешности и всем остальном; вам может казаться, что вы хорошо работаете, но пока кто-то другой не скажет вам об этом, вы не будете в этом по-настоящему уверены.</p>
         <p><label><input type="radio" name="q1" value="e">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>
   </form>`
let q20 = `
   <form action="">
         <p>20. Вы считаете, что «слово — серебро, молчание — золото»; вы подозрительно относитесь к комплиментам, раздражаетесь, когда люди повторяют уже сказанное кем-то. Вам на ум может прийти выражение «изобретать велосипед»,когда вы слышите чужую болтовню.</p>
         <p><label><input type="radio" name="q1" value="i">Да</label></p>
         <p><label><input type="radio" name="q1" value="q">Нет</label></p>
   </form>`

let q21 = `
         <form action="">
               <p>21. Вам часто приходят несколько мыслей одновременно; друзья и коллеги нередко обвиняют вас в рассеянности;</p>
               <p><label><input type="radio" name="q1" value="n">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q22 = `
         <form action="">
               <p>22. Вы предпочитаете конкретные ответы на конкретные вопросы; вы недовольны, когда на вопрос «который час?» вам отвечают не «3:45», а «около четырех» или «пора выходить». </p>
               <p><label><input type="radio" name="q1" value="s">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q23 = `
         <form action="">
               <p>23. Вы интересуетесь будущим и перспективами, не испытывая перед ними страха; вы стремитесь вперед, считая настоящее не слишком увлекательным; </p>
               <p><label><input type="radio" name="q1" value="n">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q24 = `
         <form action="">
               <p>24. Вы любите сосредоточиться на том, что вы делаете в данный момент, и обычно не задумываетесь, что будет дальше; более того, вы предпочитаете делать что-либо, а не думать об этом;</p>
               <p><label><input type="radio" name="q1" value="s">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q25 = `
         <form action="">
               <p>25. Вы уверены, что «скучные подробности» совершенно излишни;</p>
               <p><label><input type="radio" name="q1" value="n">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q26 = `
         <form action="">
               <p>26. Вы получаете наибольшее удовлетворение от работы, дающей ощутимый результат; даже если вы терпеть не можете домашнее хозяйство, вы скорее займетесь уборкой своего рабочего кабинета, чем будете размышлять о перспективах своей карьеры; </p>
               <p><label><input type="radio" name="q1" value="s">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q27 = `
         <form action="">
               <p>27. Вы считаете, что время относительно; неважно, сколько времени показывают часы, — вы решите, что опоздали, только если встреча/ужин/вечеринка начнется без вас;</p>
               <p><label><input type="radio" name="q1" value="n">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q28 = `
         <form action="">
               <p>28. Вы считаете, что «незачем чинить, пока не сломалось»; вы не понимаете, почему некоторые стремятся улучшить буквально все вокруг;</p>
               <p><label><input type="radio" name="q1" value="s">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q29 = `
         <form action="">
               <p>29. Вы любите исследовать природу вещей ради собственного удовольствия, без всякой практической пользы</p>
               <p><label><input type="radio" name="q1" value="n">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q30 = `
         <form action="">
               <p>30. Вы предпочитаете работать с фактами и цифрами, а не сидеями и теориями; вам нравится, когда информация излагается последовательно а не хаотично,</p>
               <p><label><input type="radio" name="q1" value="s">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q31 = `
         <form action="">
               <p>31. Вы склонны к каламбурам и игре слов (вероятно, вы даже занимаетесь этим сразу после пробуждения;</p>
               <p><label><input type="radio" name="q1" value="n">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q32 = `
         <form action="">
               <p>32. Вы  считаете «воображение» ругательным словом; вас удивляют люди, которые проводят много времени в мечтах и фантазиях</p>
               <p><label><input type="radio" name="q1" value="s">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q33 = `
         <form action="">
               <p>33. Вы стремитесь отыскать глубинную суть и логическую структуру вещей, вместо того чтобы принимать их буквально; вы всегда задаетесь вопросом: «Что это значит?»;</p>
               <p><label><input type="radio" name="q1" value="n">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q34 = `
         <form action="">
               <p>34. Вы читаете журналы от начала и до конца; вы не понимаете, почему некоторые сразу открывают их посередине, выбирая, что им больше нравится;</p>
               <p><label><input type="radio" name="q1" value="s">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q35 = `
         <form action="">
               <p>35. Вы на большинство вопросов даете общие ответы; вы не понимаете, почему многие не могут следовать вашим указаниям, вас раздражает, когда люди требуют от вас конкретики;</p>
               <p><label><input type="radio" name="q1" value="n">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q36 = `
         <form action="">
               <p>36. Вы  расстраиваетесь, когда вам не дают четких инструкций или говорят: «Вот общий план, а подробности обсудим позже»; или еще того хуже — когда вам кажется, что вы получили четкие инструкции, а другие воспринимают их как приблизительные рекомендации;</p>
               <p><label><input type="radio" name="q1" value="s">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q37 = `
         <form action="">
               <p>37. Вы предпочтете пофантазировать, на что вы потратите вашу следующую зарплату, вместо того чтобы сесть и подсчитать реальный баланс вашего счета.</p>
               <p><label><input type="radio" name="q1" value="n">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q38 = `
         <form action="">
               <p>38. Вы используете слова в их буквальном смысле; чужие слова вы тоже воспринимаете буквально и подчас спрашиваете (или спрашивают вас): «Ты серьезно или пошутил?»</p>
               <p><label><input type="radio" name="q1" value="s">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q39 = `
         <form action="">
               <p>39. Вы подпишетесь под утверждением «лучше один раз увидеть,чем сто раз услышать»; даже если вам говорят, что «поезд уже здесь», вы знаете — на самом-то деле он будет «здесь» только тогда, когда вы сможете в него сесть.</p>
               <p><label><input type="radio" name="q1" value="s">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q40 = `
         <form action="">
               <p>40. Вы скорее рассматриваете отдельные деревья, а не лес целиком; вы с радостью погружаетесь в свою собственную работу, и вас не слишком заботит то, как она вписывается в общий проект</p>
               <p><label><input type="radio" name="q1" value="s">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q41 = `
         <form action="">
               <p>41. Вы считаете «хорошим решением» такое решение, которое принимает во внимание чувства других людей;</p>
               <p><label><input type="radio" name="q1" value="f">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q42 = `
         <form action="">
               <p>42. Вы можете оставаться спокойным, хладнокровным и объективным в ситуациях, которые расстраивают всех остальных;</p>
               <p><label><input type="radio" name="q1" value="t">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q43 = `
         <form action="">
               <p>43. Вы чувствуете, что любовь необъяснима и ей невозможнь дать четкое определение; вас оскорбляют попытки других это сделать;</p>
               <p><label><input type="radio" name="q1" value="f">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q44 = `
         <form action="">
               <p>44. Вы скорее станете обсуждать вопросы справедливости и истины, чем счастье человечества;</p>
               <p><label><input type="radio" name="q1" value="t">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q45 = `
         <form action="">
               <p>45. Вы готовы прыгнуть выше головы, чтобы помочь окружающим; вы можете сделать почти все, что нужно для чужого блага, даже за счет вашего собственного комфорта;</p>
               <p><label><input type="radio" name="q1" value="f">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q46 = `
         <form action="">
               <p>46. Вы получаете удовольствие, когда что-либо доказываете; вы способны аргументировать противоположные точки зрения просто для расширения своих интеллектуальных горизонтов;</p>
               <p><label><input type="radio" name="q1" value="t">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q47 = `
         <form action="">
               <p>47. Вы часто ставите себя на место другого человека; вы — тот человек, который на совещании может спросить: «А как это повлияет на людей, имеющих к этому отнощение?»;</p>
               <p><label><input type="radio" name="q1" value="f">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q48 = `
         <form action="">
               <p>48. Вы скорее прямолинейны, чем мягкосердечны; если вы с кем-то не согласны, то скажете ему об этом, а не промолчите, позволив ему думать, что он прав;</p>
               <p><label><input type="radio" name="q1" value="t">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q49 = `
         <form action="">
               <p>49. Вы получаете удовольствие, когда оказываете кому-то желанную услугу, хотя и видите, что некоторые люди этим пользуются;</p>
               <p><label><input type="radio" name="q1" value="f">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q50 = `
         <form action="">
               <p>50. Вы гордитесь своей объективностью, несмотря на то что некоторые считают вас холодным и жестоким человеком (уж вы-то знаете, что это неправда!);</p>
               <p><label><input type="radio" name="q1" value="t">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q51 = `
         <form action="">
               <p>51. Вы часто задаетесь вопросом: «Неужели никого не волнует, чего я хочу?» — хотя вряд ли скажете это вслух;</p>
               <p><label><input type="radio" name="q1" value="f">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q52 = `
         <form action="">
               <p>52. Вы не напрягаетесь, принимая сложные решения, и не понимаете, почему многие так расстраиваются из-за того, что не имеет отношения к делу;</p>
               <p><label><input type="radio" name="q1" value="t">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q53 = `
         <form action="">
               <p>53. Вы без колебаний откажетесь от своих слов, если почувствуете, что они кого-то обидели; из-за этого вас могут считать безвольным и непостоянным;</p>
               <p><label><input type="radio" name="q1" value="f">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q54 = `
         <form action="">
               <p>54. Вы считаете, что важнее быть правым, чем вызывать симпатию; вам не кажется, что для успешной совместной работы между людьми должны быть хорошие личные отношения;</p>
               <p><label><input type="radio" name="q1" value="t">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q55 = `
         <form action="">
               <p>55. Вы предпочитаете истине гармонию; вас расстраивают конфликты во время семейных и дружеских встреч, вы стараетесь либо их избежать («Давайте сменим тему»), либо примирить противников («Давайте обнимемся и помиримся»);</p>
               <p><label><input type="radio" name="q1" value="f">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q56 = `
         <form action="">
               <p>56. Вы доверяете всему, что логично и научно; вы будете скептически относиться к типоведению, пока не получите достаТОЧНО информации о его преимуществах;</p>
               <p><label><input type="radio" name="q1" value="t">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q57 = `
         <form action="">
               <p>57. Вы часто слышите обвинения в том, что принимаете все слишком близко к сердцу.</p>
               <p><label><input type="radio" name="q1" value="f">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q58 = `
         <form action="">
               <p>58. Вы легче запоминаете цифры и даты, чем лица и имена.</p>
               <p><label><input type="radio" name="q1" value="t">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q59 = `
         <form action="">
               <p>61. Вы легко отвлекаетесь, можете «потеряться» между дверью дома и машиной, припаркованной во дворе;</p>
               <p><label><input type="radio" name="q1" value="p">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q60 = `
         <form action="">
               <p>62. Вы всегда кого-то ждете: «Почему другие постоянно опазды— вают?»;</p>
               <p><input type="radio" name="q1" value="j">Да</p>
               <p><input type="radio" name="q1" value="q">Нет</p>
         </form>`
let q61 = `
         <form action="">
               <p>63. Вы любите исследовать неизвестное, даже если это всего лишь новый путь от работы до дома;</p>
               <p><label><input type="radio" name="q1" value="p">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q62 = `
         <form action="">
               <p>64. Вы знаете, что где должно лежать, и не успокоитесь, пока все не окажется на своих местах;</p>
               <p><label><input type="radio" name="q1" value="j">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q63 = `
         <form action="">
               <p>65. Вы не планируете работу заранее, предпочитая подождать и посмотреть, что будет действительно нужно сделать; вас обвиняют в неорганизованности, но вы-то лучше знаете;</p>
               <p><label><input type="radio" name="q1" value="p">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q64 = `
         <form action="">
               <p>66. Вы уверены, что если бы все делали то, что им положено (и когда положено), мир стал бы заметно лучше;</p>
               <p><label><input type="radio" name="q1" value="j">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q65 = `
         <form action="">
               <p>67. Вы рассчитываете на «второе дыхание» в последние минуты перед сроком сдачи работы; вам обычно удается успеть в срок, хотя в процессе вы перевернете вверх дном все вокруг;</p>
               <p><label><input type="radio" name="q1" value="p">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q66 = `
         <form action="">
               <p>68. Вы просыпаясь утром, хорошо представляете, что будете делать днем; вы составляете себе расписание и следуете ему, а неожиданные изменения планов могут привести вас в замешательство;</p>
               <p><label><input type="radio" name="q1" value="j">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q67 = `
         <form action="">
               <p>69. Вы не верите, что «аккуратность превыше всего», хотя теоретически вы не против порядка; но главное — это творческий подход, спонтанность и быстрая реакция;</p>
               <p><label><input type="radio" name="q1" value="p">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q68 = `
         <form action="">
               <p>70. Вы не любите сюрпризов и уведомляете об этом всех окружающих;</p>
               <p><label><input type="radio" name="q1" value="j">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q69 = `
         <form action="">
               <p>71. Вы превращаете работу в игру; если работа не доставляет удовольствия, то «зачем ее вообще выполнять?»;</p>
               <p><label><input type="radio" name="q1" value="p">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q70 = `
         <form action="">
               <p>72. Вы записываете по пунктам, что вы планируете сделать, и пользуетесь этими списками; если вы сделаете что-то, чего нет в списке, не исключено, что вы допишете этот пункт в список специально, чтобы его вычеркнуть;</p>
               <p><label><input type="radio" name="q1" value="j">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q71 = `
         <form action="">
               <p>73. Вы часто меняете тему разговора; вас может внезапно заинтересовать случайно пришедшая в голову мысль или че ловек, который только что вошел в комнату;</p>
               <p><label><input type="radio" name="q1" value="p">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q72 = `
         <form action="">
               <p>74. Вы испытываете потребность в порядке; у вас есть особая система расположения еды в холодильнике и посуды на сушилке, вешалок в шкафах и картин на стенах;</p>
               <p><label><input type="radio" name="q1" value="j">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q73 = `
         <form action="">
               <p>75. Вы не любите, когда у вас связаны руки; вы всегда лучше себя Чувствуете, когда у вас есть выбор;</p>
               <p><label><input type="radio" name="q1" value="p">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q74 = `
         <form action="">
               <p>76. Вы любите доделывать все до конца и только потом откладывать в сторону, даже если знаете, что вам все равно придется все переделывать заново.</p>
               <p><label><input type="radio" name="q1" value="j">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q75 = `
         <form action="">
               <p>77. Иногда из-за вас многие вещи теряют определенность, но не всегда — это зависит от ситуации.</p>
               <p><label><input type="radio" name="q1" value="p">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`
let q76 = `
         <form action="">
               <p>78. Вы иногда слышите несправедливые обвинения в агрессии после того, как вы всего лишь высказали свое мнение; </p>
               <p><label><input type="radio" name="q1" value="j">Да</label></p>
               <p><label><input type="radio" name="q1" value="q">Нет</label></p>
         </form>`




export { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26, q27, q28, q29, q30, q31, q32, q33, q34, q35, q36, q37, q38, q39, q40, q41, q42, q43, q44, q45, q46, q47, q48, q49, q50, q51, q52, q53, q54, q55, q56, q57, q58, q59, q60, q61, q62, q63, q64, q65, q66, q67, q68, q69, q70, q71, q72, q73, q74, q75, q76 }







// let q212 = `
// <form action="">
//       <p>4. Я сенсорик</p>
//       <p><input type="radio" name="q1" value="s">Да</p>
//       <p><input type="radio" name="q1" value="n">Нет</p>
// </form>`
// let q222 = `
// <form action="">
//       <p>5. Я логик</p>
//       <p><input type="radio" name="q1" value="t">Да</p>
//       <p><input type="radio" name="q1" value="f">Нет</p>
// </form>`
// let q232 = `
// <form action="">
//       <p>6. Я рационал</p>
//       <p><input type="radio" name="q1" value="j">Да</p>
//       <p><input type="radio" name="q1" value="p">Нет</p>
// </form>`

// for (let i = 21; i <= 80; i++) {
//    if (i > 20 && i <= 40) {
//       if (i % 2 == 0) {
//          console.log(`let q${i} = \`
//          <form action="">
//                <p>${i}. Вы </p>
//                <p><input type="radio" name="q1" value="s">Да</p>
//                <p><input type="radio" name="q1" value="q">Нет</p>
//          </form>\``);
//       } else if (i % 2 !== 0) {
//          console.log(`let q${i} = \`
//          <form action="">
//                <p>${i}. Вы </p>
//                <p><input type="radio" name="q1" value="n">Да</p>
//                <p><input type="radio" name="q1" value="q">Нет</p>
//          </form>\``);
//       }
//    } else if (i > 40 && i <= 60) {
//       if (i % 2 == 0) {
//          console.log(`let q${i} = \`
//          <form action="">
//                <p>${i}. Вы </p>
//                <p><input type="radio" name="q1" value="t">Да</p>
//                <p><input type="radio" name="q1" value="q">Нет</p>
//          </form>\``);
//       } else if (i % 2 !== 0) {
//          console.log(`let q${i} = \`
//          <form action="">
//                <p>${i}. Вы </p>
//                <p><input type="radio" name="q1" value="f">Да</p>
//                <p><input type="radio" name="q1" value="q">Нет</p>
//          </form>\``);
//       }
//    } else if (i > 60 && i <= 80) {
//       if (i % 2 == 0) {
//          console.log(`let q${i} = \`
//          <form action="">
//                <p>${i}. Вы </p>
//                <p><input type="radio" name="q1" value="j">Да</p>
//                <p><input type="radio" name="q1" value="q">Нет</p>
//          </form>\``);
//       } else if (i % 2 !== 0) {
//          console.log(`let q${i} = \`
//          <form action="">
//                <p>${i}. Вы </p>
//                <p><input type="radio" name="q1" value="p">Да</p>
//                <p><input type="radio" name="q1" value="q">Нет</p>
//          </form>\``);
//       }
//    }
// }



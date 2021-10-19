<script>
  

  (function($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);
</script><svelte:head><title>Resources</title><meta name="viewport" content="width=device-width, initial-scale=1.0,  maximum-scale=1"> 
     <meta name="title" content="Saucy Foundation">
     <meta name="description" content="The official Saucy Foundation.">
     <meta name="keywords" content="saucy foundation">
     <link rel="manifest" href="/manifest.json">
   </svelte:head>

     
     <style>
          h2, p {
              margin: 10px;
          }
          
          </style>
          
   <br><br>

     <h2>Resources</h2><br>
     
     <ul class="accordion">
          <li>
               <a>Abortion</a>
<p>​National Domestic Violence Hotline 1-800-799-SAFE

<br>Post Abortion Counseling 1-800-228-0332
     
    <br> Post Abortion Project Rachel 1-800-5WE-CARE
     
    <br> National Abortion Federation Hotline 1-800-772-9100
     ​
    <br> National Office of Post Abortion Trauma 1-800-593-2273 </p>      
        </li>

          <li>
               <a>Abuse</a>
               <p>
National Sexual Assault Hotline 1-800-656-HOPE (4673)

<br>Stop it Now! 1-888-PREVENT

<br>United States Elder Abuse Hotline 1-866-363-4276

<br>National Child Abuse Hotline 1-800-4-A-CHILD (422-4453)

<br>Child Abuse Hotline / Dept of Social Services 1-800-342-3720

<br>Child Abuse National Hotline 1-800-25-ABUSE

<br>Children in immediate danger 1-800-THE-LOST

<br>Exploitation of Children 1-800-843-5678

​<br>Missing Children Help Center 1-800-872-5437
                    ​</p>
          </li>

          <li>
               <a>Addiction</a>
               <p>
Marijuana Anonymous 1-800-766-6779

<br>Alcohol Treatment Referral Hotline (24 hours) 1-800-252-6465

<br>Families Anonymous 1-800-736-9805

<br>Cocaine Hotline (24 hours) 1-800-262-2463

<br>Drug Abuse National Helpline 1-800-662-4357

<br>National Association for Children of Alcoholics 1-888-554-2627
​
<br>Ecstasy Addiction 1-800-468-6933

<br>Alcoholics for Christ 1-800-441-7877
                    ​</p>
          </li>

          <li>
               <a>Cancer</a>
               <p>
American Cancer Society 1-800-227-2345
​
<br>National Cancer institute 1-800-422-6237
                    ​</p>
          </li>

          <li>
               <a>Care Givers</a>
               <p>
Elder Care Locator 1-800-677-1116
​
<br>Well Spouse Foundation 1-800-838-0879
                    ​</p>
          </li>

          <li>
               <a>Christian Counseling</a>
               <p>
New Life Clinics 1-800-NEW-LIFE

<br>National Prayer Line 1-800-4-PRAYER

<br>Bethany Lifeline Pregnancy Hotline 1-800-BETHANY

<br>Liberty Godparent Ministry 1-800-368-3336

<br>Grace Help Line 24 Hour Christian service 1-800-982-8032

<br>The 700 Club Hotline 1-800-759-0700

<br>Want to know Jesus? 1-800-NEED-HIM

<br>Biblical help for youth in crisis 1-800-HIT-HOME

<br>Rapha National Network 1-800-383-HOPE

<br>Emerge Ministries 330-867-5603

<br>Meier Clinics 1-888-7-CLINIC or 1-888-725-4642

<br>Association of Christian Counselors 1-800-526-8673

<br>Minirth Clinic 1-888-MINIRTH (646-4784)

<br>Pine Rest 1-800-678-5500

<br>Timberline Knolls 1-877-257-9611

<br>Focus on the Family 1-855-771-HELP (4357)

<br>Grace Help Line 24 Hour Christian Service 1-800-982-8032
​
<br>Want to know Jesus? 1-800-NEED-HIM
                    ​</p>
          </li>

          <li>
               <a>Chronic Illness/Pain</a>
               <p>
Rest Ministries 1-888-751-REST (7378)
​
<br>​Watchman Fellowship 1-817-277-0023
                    ​</p>
          </li>

          <li>
               <a>Crisis</a>
               <p>
United Way Crisis Helpline 1-800-233-HELP

<br>Christian Oriented Hotline 1-877-949-HELP
​
<br>Social Security Administration 1-800-772-1213
                    ​</p>
          </li>

          <li>
               <a>Domestic Violence</a>
               <p>
National Domestic Violence Hotline 1-800-799-SAFE

<br>National Domestic Violence Hotline Spanish 1-800-942-6908

<br>Battered Women and their Children 1-800-603-HELP

<br>Elder Abuse Hotline 1-800-252-8966

<br>RAINN 1-800-656-HOPE (4673)
​
<br>Family Violence Prevention Center 1-800-313-1310
                    ​</p>
          </li>

          <li>
               <a>Eating Disorders</a>
               <p>
National Domestic Violence Hotline 1-800-799-SAFE

<br>National Domestic Violence Hotline Spanish 1-800-942-6908

<br>Battered Women and their Children 1-800-603-HELP

<br>Elder Abuse Hotline 1-800-252-8966
​
​<br>RAINN 1-800-656-HOPE (4673)
                    ​</p>
          </li>

          <li>
               <a>Gambling</a>
               <p>
Compulsive Gambling Hotline 1-410-332-0402
                    ​</p>
          </li>

          <li>
               <a>Grief/Loss</a>
<p>GriefShare 1-800-395-5755
          
                    ​</p>
          </li>

          <li>
               <a>Homeless/Shelters</a>
               <p>
Homeless 1-800-231-6946
​
<br>American Family Housing 1-888-600-4357
                    ​</p>
          </li>

          <li>
               <a>LGBTQIA+</a>
               <p>
Helpline: 1-800-398-GAYS

<br>Gay and Lesbian National Hotline 1-888-843-4564
​
<br>Trevor Hotline (Suicide) 1-866-4-U-TREVOR
                    ​</p>
          </li>

          <li>
               <a>Parents</a>
               <p>
Hotline for parents considering abducting their children 1-800-A-WAY-OUT

<br>United States Missing Children Hotline 1-800-235-3535

<br>Crisis Pregnancy Hotline Number 1-800-67-BABY-6
​
<br>Liberty Godparent Ministry 1-800-368-3336
                    ​</p>
          </li>

          <li>
               <a>Runaways</a>
               <p>
Boystown National Hotline 1-800-448-3000

<br>National Runaway Safeline 1-800-RUNAWAY (786-2929)

<br>Laurel House 1-714-832-0207

<br>National Runaway Switchboard 1-800-621-4000

<br>Teenline 1-888-747-TEEN
​
<br>Youth Crisis Hotline 1-800-448-4663
                    ​</p>
          </li>

          <li>
               <a>Sexual Addiction</a>
               <p>
Project Know 1-888-892-1840
​
<br>Sex Addicts Anonymous 1-800-477-8191
                    ​</p>
          </li>

          <li>
               <a>Suicide</a>
               <p>
Suicide Hotline 1-800-SUICIDE (784-2433) or 1-800-273-TALK (8255)

<br>Suicide Prevention Hotline 1-800-827-7571

<br>Deaf Hotline 1-800-799-4TTY

<br>Holy Spirit Teenline (717) 763-2345 or 1-800-722-5385

<br>Crisis Intervention (Harrisburg) (717) 232-7511 or 1- 888- 596-4447

<br>Carlisle Helpline (717) 249-6226
​
<br>Crisis Intervention (York) (717) 851-5320 or 1-800-673-2496
                    ​</p>
          </li>
     </ul> 








<br><br><br><br><br>

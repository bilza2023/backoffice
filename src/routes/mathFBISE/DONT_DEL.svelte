<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,CardImg,Card,InputFormCancel,ShowIfTrue,Loading} from '$lib/cmp';
import {onMount,toast , Icons,Agent} from '$lib/util';


import MainNav from '$lib/appComp/MainNav.svelte';
</script>

<MainNav/>
<!-- ************** -->
<PageWrapper>
<br>
<Centre>
    <HdgWithIcon bgColor='bg-stone-600'  icon='📜'>Math Class 9th Punjab Text Book Board</HdgWithIcon>
</Centre>
<br>

<div class="flex justify-center gap-2 flex-wrap">
<CardImg title='Math Class 9th (PTBB)' img='/images/math_9thPTBB.png'/>
</div>

<br>
<Centre>
    <HdgWithIcon bgColor='bg-stone-600'  icon={Icons.BOOKS}>Chapters</HdgWithIcon>
</Centre>
<br>

<HdgWithIcon bgColor='bg-stone-600'  icon={Icons.BOOK}>Chapter 1- Matrics and Determinants</HdgWithIcon>
<br/>
<br/>
<div class="flex justify-center gap-2 flex-wrap">
<Card title= 'Exercise 1.1' url="" icon={Icons.BULB} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 1.2' url="" icon={Icons.BULB} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 1.3' url="" icon={Icons.BULB} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 1.4' url="" icon={Icons.BULB} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 1.5' url="" icon={Icons.BULB} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 1.6' url="" icon={Icons.BULB} bgColor = 'bg-gray-500' />
</div>

<br>
<HdgWithIcon bgColor='bg-stone-600'  icon={Icons.BOOK}>Chapter 2- Real and Complex Numbers</HdgWithIcon>
<br/>
<br/>
<div class="flex justify-center gap-2 flex-wrap">
<Card title= 'Exercise 2.1' url="" icon={Icons.BALANCE}  bgColor = 'bg-gray-500' />
<Card title= 'Exercise 2.2' url="" icon={Icons.BALANCE}  bgColor = 'bg-gray-500' />
<Card title= 'Exercise 2.3' url="" icon={Icons.BALANCE}  bgColor = 'bg-gray-500' />
<Card title= 'Exercise 2.4' url="" icon={Icons.BALANCE}  bgColor = 'bg-gray-500' />
<Card title= 'Exercise 2.5' url="" icon={Icons.BALANCE}  bgColor = 'bg-gray-500' />
<Card title= 'Exercise 2.6' url="" icon={Icons.BALANCE}  bgColor = 'bg-gray-500' />
</div>

<br>
<HdgWithIcon bgColor='bg-stone-600'  icon={Icons.BOOK}>Chapter 3- LOGARITHMS</HdgWithIcon>
<br/>
<br/>
<div class="flex justify-center gap-2 flex-wrap">
<Card title= 'Exercise 3.1' url="" icon={Icons.BOOK} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 3.2' url="" icon={Icons.BOOK} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 3.3' url="" icon={Icons.BOOK} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 3.4' url="" icon={Icons.BOOK} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 3.5' url="" icon={Icons.BOOK} bgColor = 'bg-gray-500' />
</div>

<br>
<HdgWithIcon bgColor='bg-stone-600'  icon={Icons.BOOK}>Chapter 4 - Algebric Expressions and Formulas</HdgWithIcon>
<br/>
<br/>
<div class="flex justify-center gap-2 flex-wrap">
<Card title= 'Exercise 4.1' url="" icon={Icons.COG} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 4.2' url="" icon={Icons.COG} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 4.3' url="" icon={Icons.COG} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 4.4' url="" icon={Icons.COG} bgColor = 'bg-gray-500' />
</div>

<br>
<HdgWithIcon bgColor='bg-stone-600'  icon={Icons.BOOK}>Chapter 5 - Factorization</HdgWithIcon>
<br/>
<br/>
<div class="flex justify-center gap-2 flex-wrap">
<Card title= 'Exercise 5.1' url="" icon={Icons.CLOCK} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 5.2' url="" icon={Icons.CLOCK} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 5.3' url="" icon={Icons.CLOCK} bgColor = 'bg-gray-500' />
</div>

<br>
<HdgWithIcon bgColor='bg-stone-600'  icon={Icons.BOOK}>Chapter 6 - Algebric Manipulation</HdgWithIcon>
<br/>
<br/>
<div class="flex justify-center gap-2 flex-wrap">
<Card title= 'Exercise 6.1' url="" icon={Icons.CHARTUP} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 6.2' url="" icon={Icons.CHARTUP} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 6.3' url="" icon={Icons.CHARTUP} bgColor = 'bg-gray-500' />
</div>

<br>
<HdgWithIcon bgColor='bg-stone-600'  icon={Icons.BOOK}>Chapter 7 - Linear Equations and In Equalities</HdgWithIcon>
<br/>
<br/>
<div class="flex justify-center gap-2 flex-wrap">
<Card title= 'Exercise 7.1' url="" icon={Icons.CHARTDOWN} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 7.2' url="" icon={Icons.CHARTDOWN} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 7.3' url="" icon={Icons.CHARTDOWN} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 7.4' url="" icon={Icons.CHARTDOWN} bgColor = 'bg-gray-500' />
</div>

<br>
<HdgWithIcon bgColor='bg-stone-600'  icon={Icons.BOOK}>Chapter 8 - Linear Graphs and Applications</HdgWithIcon>
<br/>
<br/>
<div class="flex justify-center gap-2 flex-wrap">
<Card title= 'Exercise 8.1' url="" icon={Icons.NOTES} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 8.2' url="" icon={Icons.NOTES} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 8.3' url="" icon={Icons.NOTES} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 8.4' url="" icon={Icons.NOTES} bgColor = 'bg-gray-500' />
</div>

<br>
<HdgWithIcon bgColor='bg-stone-600'  icon={Icons.BOOK}>Chapter 9 - Introduction to Coordinate Geometry</HdgWithIcon>
<br/>
<br/>
<div class="flex justify-center gap-2 flex-wrap">
<Card title= 'Exercise 9.1' url="" icon={Icons.RULER} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 9.2' url="" icon={Icons.RULER} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 9.3' url="" icon={Icons.RULER} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 9.4' url="" icon={Icons.RULER} bgColor = 'bg-gray-500' />
</div>

<br>
<HdgWithIcon bgColor='bg-stone-600'  icon={Icons.BOOK}>Chapter 10 - Congruent Triangles</HdgWithIcon>
<br/>
<br/>
<div class="flex justify-center gap-2 flex-wrap">
<Card title= 'Exercise 10.1' url="" icon={Icons.SUN} bgColor = 'bg-gray-500' />
</div>

<br>
<HdgWithIcon bgColor='bg-stone-600'  icon={Icons.BOOK}>Chapter 11 - Parallelograms and Triangles</HdgWithIcon>
<br/>
<br/>
<div class="flex justify-center gap-2 flex-wrap">
<Card title= 'Exercise 11.1' url="" icon={Icons.BOOK} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 11.2' url="" icon={Icons.BOOK} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 11.3' url="" icon={Icons.BOOK} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 11.4' url="" icon={Icons.BOOK} bgColor = 'bg-gray-500' />
</div>

<br>
<HdgWithIcon bgColor='bg-stone-600'  icon={Icons.BOOK}>Chapter 12 - Line and Angle Bisectors</HdgWithIcon>
<br/>
<br/>
<div class="flex justify-center gap-2 flex-wrap">
<Card title= 'Exercise 2.1' url="" icon={Icons.TRIANGULAR_RULER} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 2.2' url="" icon={Icons.TRIANGULAR_RULER} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 2.3' url="" icon={Icons.TRIANGULAR_RULER} bgColor = 'bg-gray-500' />
</div>

<br>
<HdgWithIcon bgColor='bg-stone-600'  icon={Icons.BOOK}>Chapter 13 - Side and Angles of a Triangle</HdgWithIcon>
<br/>
<br/>
<div class="flex justify-center gap-2 flex-wrap">
<Card title= 'Exercise 13.1' url="" icon={Icons.TRIANGULAR_RULER} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 13.2' url="" icon={Icons.TRIANGULAR_RULER} bgColor = 'bg-gray-500' />
</div>

<br>
<HdgWithIcon bgColor='bg-stone-600'  icon={Icons.BOOK}>Chapter 14 - Ratio and ProPortions</HdgWithIcon>
<br/>
<br/>
<div class="flex justify-center gap-2 flex-wrap">
<Card title= 'Exercise 14.1' url="" icon={Icons.TEMPRATURE} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 14.2' url="" icon={Icons.TEMPRATURE} bgColor = 'bg-gray-500' />
</div>

<br>
<HdgWithIcon bgColor='bg-stone-600'  icon={Icons.BOOK}>Chapter 15 - Pythagoras Theorem</HdgWithIcon>
<br/>
<br/>
<div class="flex justify-center gap-2 flex-wrap">
<Card title= 'Exercise 15.1' url="" icon={Icons.TEMPRATURE} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 15.2' url="" icon={Icons.TEMPRATURE} bgColor = 'bg-gray-500' />
</div>

<br>
<HdgWithIcon bgColor='bg-stone-600'  icon={Icons.BOOK}>Chapter 16 - Theorems Related to Area</HdgWithIcon>
<br/>
<br/>
<div class="flex justify-center gap-2 flex-wrap">
<Card title= 'Exercise 16.1' url="" icon={Icons.BOOK} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 16.2' url="" icon={Icons.BOOK} bgColor = 'bg-gray-500' />
</div>

<br>
<HdgWithIcon bgColor='bg-stone-600'  icon={Icons.BOOK}>Chapter 17 - Practical Geometry Triangles</HdgWithIcon>
<br/>
<br/>
<div class="flex justify-center gap-2 flex-wrap">
<Card title= 'Exercise 17.1' url="" icon={Icons.TRIANGULAR_RULER} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 17.2' url="" icon={Icons.TRIANGULAR_RULER} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 17.3' url="" icon={Icons.TRIANGULAR_RULER} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 17.4' url="" icon={Icons.TRIANGULAR_RULER} bgColor = 'bg-gray-500' />
<Card title= 'Exercise 17.5' url="" icon={Icons.TRIANGULAR_RULER} bgColor = 'bg-gray-500' />
</div>





<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</PageWrapper>


<template>
  <article id="wrap">
	<article id="lightings">
    	<section id="one">
            <section id="two">
                <section id="three">
                    <section id="four">
                        <section id="five">
                            
                        </section>
                    </section>
                </section>
            </section>
		</section>
    </article>
</article>
</template>

<script setup>
</script>

<style scoped>

/* CSS Document */

#wrap
{
	width: 100%;
	height: 100%;
	position: relative;
	margin: 0 auto 0 auto;
	overflow: hidden;
    z-index: 999;
}

#lightings
{
	bottom: -60px;
	position: absolute;
	width: 100%;
}

#wrap {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}

#lightings {
  bottom: -60px;
  position: absolute;
  width: 100%;
}

section {
  border-radius: 50%;
  height: 20px;
  width: 100%;
  position: relative;
  margin: auto;
}

#one {
  animation: one 5s ease-in-out infinite alternate;
}
@keyframes one {
  from {
    box-shadow: 0 0 250px 20px #141915;
  }
  to {
    box-shadow: 0 0 100px 15px #2c3a31;
  }
}

#two {
  width: 90%;
  animation: two 4s ease-in-out infinite alternate;
}
@keyframes two {
  from {
    box-shadow: 0 0 250px 20px #1a241d;
  }
  to {
    box-shadow: 0 0 100px 15px #3b4a3f;
  }
}

#three {
  width: 80%;
  animation: three 3s ease-in-out infinite alternate;
}
@keyframes three {
  from {
    box-shadow: 0 0 250px 20px #122317;
  }
  to {
    box-shadow: 0 0 100px 15px #3e5a48;
  }
}

#four {
  width: 70%;
  animation: four 2s ease-in-out infinite alternate;
}
@keyframes four {
  from {
    box-shadow: 0 0 250px 20px #101d13;
  }
  to {
    box-shadow: 0 0 100px 15px #2f4a3a;
  }
}

#five {
  width: 60%;
  animation: five 1s ease-in-out infinite alternate;
}
@keyframes five {
  from {
    box-shadow: 0 0 250px 20px #141915;
  }
  to {
    box-shadow: 0 0 100px 15px #3b4e3f;
  }
}

</style>
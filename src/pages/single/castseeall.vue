  <template>
  <div class="mx-3">
    <div class="dark:text-white text-lg font-bold text-lg my-2">
      The SpongeBob Movie: Sponge on the Run (2020)
    </div>
    <div class="dark:text-white text-base">Cast & Crew</div>
    <div class="flex flex-wrap overflow-hidden justify-center">
      <div class="md:w-1/2">
        <div class="flex flex-wrap overflow-hidden justify-center">
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
        </div>
      </div>
      <div class="md:w-1/2">
        <div class="flex flex-wrap overflow-hidden justify-center">
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap overflow-hidden justify-center">
      <div class="md:w-1/2">
        <div class="flex flex-wrap overflow-hidden justify-center">
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
        </div>
      </div>
      <div class="md:w-1/2">
        <div class="flex flex-wrap overflow-hidden justify-center">
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap overflow-hidden justify-center">
      <div class="md:w-1/2">
        <div class="flex flex-wrap overflow-hidden justify-center">
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
        </div>
      </div>
      <div class="md:w-1/2">
        <div class="flex flex-wrap overflow-hidden justify-center">
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap overflow-hidden justify-center">
      <div class="md:w-1/2">
        <div class="flex flex-wrap overflow-hidden justify-center">
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
        </div>
      </div>
      <div class="md:w-1/2">
        <div class="flex flex-wrap overflow-hidden justify-center">
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
          <div class="md:w-1/5">
            <per-actor />
          </div>
        </div>
      </div>
    </div>
    <load-more />
  </div>
</template>	
<script>
import PerActor from "@/components/actorlist/actor";
import LoadMore from "@/components/buttons/loadmore";

export default {
  components: {
    PerActor,
    LoadMore,
  },
  mounted() {},
};
</script>

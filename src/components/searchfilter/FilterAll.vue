<template>
  <div>
    <div
      class="shadow-md dark:bg-black bg-back-white rounded-lg dark:text-white"
    >
      <div class="text-xl p-2 flex justify-between">
        Sort
        <div
          v-b-toggle.collapse-1
          variant="primary"
          style="outline: none; transform: scaleY(-1)"
          @click="toggleDropdownAnimation('sort')"
        >
          <lottie
            v-show="isDark === true"
            :width="30"
            :height="30"
            :options="whiteAnim"
            v-on:animCreated="
              (a) => handleDropdownAnimation(a, 'sort', 'white')
            "
          />
          <lottie
            v-show="isDark === false"
            :width="30"
            :height="30"
            :options="blackAnim"
            v-on:animCreated="
              (a) => handleDropdownAnimation(a, 'sort', 'black')
            "
          />
        </div>
      </div>
      <b-collapse id="collapse-1" visible class="mt-2">
        <p class="text-md px-2">Sort Results By</p>
        <b-form-select
          v-model="selected"
          class="mb-3 mx-2 text-sm dark:bg-custom-gray dark:text-white"
          style="width: 94%; border-radius: 6px"
        >
          <b-form-select-option :value="null" class="">
            Awards Ascending
          </b-form-select-option>
          <b-form-select-option value="a">
            Release Date Descending
          </b-form-select-option>
          <b-form-select-option value="b">
            Release Ascending
          </b-form-select-option>
          <b-form-select-option :value="null">
            Title (A-Z)
          </b-form-select-option>
          <b-form-select-option value="a"> Title (Z-A) </b-form-select-option>
        </b-form-select>
      </b-collapse>
    </div>
    <div
      class="shadow-md dark:bg-black bg-back-white rounded-lg dark:text-white my-3"
    >
      <div class="DemoBS2 pb-2">
        <!-- toggle part here -->
        <div
          type="button"
          class="mx-2 flex rounded-full justify-between"
          style="outline: none"
          id="toggle-btn"
          data-toggle="collapse"
          data-target="#toggle-filters"
        >
          <p class="text-xl mr-4">Filters</p>
          <font-awesome-icon
            :icon="['fas', 'sync-alt']"
            class="ml-2 mr-1"
            style="font-size: 9px; margin-top: 12px; margin-right: -21px"
          />
          <p class="text-xs mt-2">clear filter</p>
          <div
            v-b-toggle.collapse-3
            class="m-1"
            style="outline: none; transform: scaleY(-1)"
            @click="toggleDropdownAnimation('filters')"
          >
            <lottie
              v-show="isDark === true"
              :width="30"
              :height="30"
              :options="whiteAnim"
              v-on:animCreated="
                (a) => handleDropdownAnimation(a, 'filters', 'white')
              "
            />
            <lottie
              v-show="isDark === false"
              :width="30"
              :height="30"
              :options="blackAnim"
              v-on:animCreated="
                (a) => handleDropdownAnimation(a, 'filters', 'black')
              "
            />
          </div>
        </div>
        <div>
          <b-collapse id="collapse-3">
            <b-card>
              <div class="p-2 m-2">
                <p
                  class="text-xs mb-2"
                  style="padding-top: 7px; font-weight: bold"
                >
                  Show Me
                </p>
                <radio-button title="Everything" />
                <radio-button title="I Haven`t Seen" />
                <radio-button title="I Have Seen" />
              </div>
            </b-card>

            <div id="toggle-filters" class="collapse show p-2">
              <div class="flex justify-between">
                <p class="text-xs" style="padding-top: 7px; font-weight: bold">
                  Awards
                </p>
                <div
                  v-b-toggle.collapse-Awards
                  style="
                    overflow-anchor: none;
                    background: none;
                    padding: 0;
                    border: none;
                    outline: none;
                  "
                  @click="toggleDropdownAnimation('awards')"
                >
                  <lottie
                    v-show="isDark === true"
                    :width="30"
                    :height="30"
                    :options="whiteAnim"
                    v-on:animCreated="
                      (a) => handleDropdownAnimation(a, 'awards', 'white')
                    "
                  />
                  <lottie
                    v-show="isDark === false"
                    :width="30"
                    :height="30"
                    :options="blackAnim"
                    v-on:animCreated="
                      (a) => handleDropdownAnimation(a, 'awards', 'black')
                    "
                  />
                </div>
              </div>
              <b-collapse visible id="collapse-Awards">
                <b-card>
                  <div class="mytree text-xs">
                    <!-- first tree option -->
                    <div>
                      <div
                        v-b-toggle.collapse-21
                        variant="primary"
                        style=""
                        class="chevron_down"
                        @click="toggleDropdownAnimation('academy_awards')"
                      >
                        <div
                          class="flex dark:text-white"
                          style="margin-left: -23px"
                        >
                          <div style="transform: scaleY(-1); margin-top: -2px">
                            <lottie
                              v-show="isDark === true"
                              :width="23"
                              :height="20"
                              :options="whiteAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'academy_awards',
                                    'white'
                                  )
                              "
                            />
                            <lottie
                              v-show="isDark === false"
                              :width="18"
                              :height="18"
                              :options="blackAnim"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'academy_awards',
                                    'black'
                                  )
                              "
                            />
                          </div>
                          Academy Awards
                        </div>
                      </div>
                      <b-collapse id="collapse-21" class="mt-2">
                        <div
                          v-b-toggle.collapse-21-inner
                          size="sm"
                          @click="toggleDropdownAnimation('best_picture')"
                          class="chevron_down"
                        >
                          <div
                            class="flex"
                            style="transform: scaleY(-1); margin-top: -2px"
                          >
                            <lottie
                              v-show="isDark === true"
                              :width="23"
                              :height="20"
                              :options="whiteAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'best_picture',
                                    'white'
                                  )
                              "
                            />
                            <lottie
                              v-show="isDark === false"
                              :width="18"
                              :height="18"
                              :options="blackAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'best_picture',
                                    'black'
                                  )
                              "
                            />
                            <p
                              class="dark:text-white"
                              style="transform: scaleY(-1)"
                            >
                              Best Picture
                            </p>
                          </div>
                        </div>
                        <b-collapse
                          id="collapse-21-inner"
                          class="mt-2 text-black dark:text-white"
                        >
                          <b-card>
                            <div
                              v-b-toggle.collapse-22-inner
                              size="sm"
                              @click="
                                toggleDropdownAnimation('best_picture_two')
                              "
                              class="chevron_down"
                            >
                              <div
                                class="flex"
                                style="transform: scaleY(-1); margin-top: -2px"
                              >
                                <lottie
                                  v-show="isDark === true"
                                  :width="23"
                                  :height="20"
                                  :options="whiteAnim"
                                  style="margin: 0"
                                  v-on:animCreated="
                                    (a) =>
                                      handleDropdownAnimation(
                                        a,
                                        'best_picture_two',
                                        'white'
                                      )
                                  "
                                />
                                <lottie
                                  v-show="isDark === false"
                                  :width="18"
                                  :height="18"
                                  :options="blackAnim"
                                  style="margin: 0"
                                  v-on:animCreated="
                                    (a) =>
                                      handleDropdownAnimation(
                                        a,
                                        'best_picture_two',
                                        'black'
                                      )
                                  "
                                />
                                <p
                                  class="dark:text-white"
                                  style="transform: scaleY(-1)"
                                >
                                  Best Picture
                                </p>
                              </div>
                            </div>
                            <b-collapse
                              id="collapse-22-inner"
                              class="mt-2 text-black dark:text-white"
                            >
                              <p style="margin-left: 29px">SecondCaractory</p>
                            </b-collapse>
                          </b-card>
                        </b-collapse>
                      </b-collapse>
                    </div>
                    <!-- Emmy -->
                    <div>
                      <div
                        v-b-toggle.collapse-31
                        variant="primary"
                        style=""
                        class="chevron_down"
                        @click="toggleDropdownAnimation('emmy_awards')"
                      >
                        <div
                          class="flex dark:text-white"
                          style="margin-left: -23px"
                        >
                          <div style="transform: scaleY(-1); margin-top: -2px">
                            <lottie
                              v-show="isDark === true"
                              :width="23"
                              :height="20"
                              :options="whiteAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'emmy_awards',
                                    'white'
                                  )
                              "
                            />
                            <lottie
                              v-show="isDark === false"
                              :width="18"
                              :height="18"
                              :options="blackAnim"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'emmy_awards',
                                    'black'
                                  )
                              "
                            />
                          </div>
                          Emmy Awards
                        </div>
                      </div>
                      <b-collapse id="collapse-31" class="mt-2">
                        <div
                          v-b-toggle.collapse-31-inner
                          size="sm"
                          @click="toggleDropdownAnimation('emmy_best_picture')"
                          class="chevron_down"
                        >
                          <div
                            class="flex"
                            style="transform: scaleY(-1); margin-top: -2px"
                          >
                            <lottie
                              v-show="isDark === true"
                              :width="23"
                              :height="20"
                              :options="whiteAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'emmy_best_picture',
                                    'white'
                                  )
                              "
                            />
                            <lottie
                              v-show="isDark === false"
                              :width="18"
                              :height="18"
                              :options="blackAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'emmy_best_picture',
                                    'black'
                                  )
                              "
                            />
                            <p
                              class="dark:text-white"
                              style="transform: scaleY(-1)"
                            >
                              Best Picture
                            </p>
                          </div>
                        </div>
                        <b-collapse
                          id="collapse-31-inner"
                          class="mt-2 text-black dark:text-white"
                        >
                          <b-card>
                            <div
                              v-b-toggle.collapse-32-inner
                              size="sm"
                              @click="
                                toggleDropdownAnimation('emmy_best_picture_two')
                              "
                              class="chevron_down"
                            >
                              <div
                                class="flex"
                                style="transform: scaleY(-1); margin-top: -2px"
                              >
                                <lottie
                                  v-show="isDark === true"
                                  :width="23"
                                  :height="20"
                                  :options="whiteAnim"
                                  style="margin: 0"
                                  v-on:animCreated="
                                    (a) =>
                                      handleDropdownAnimation(
                                        a,
                                        'emmy_best_picture_two',
                                        'white'
                                      )
                                  "
                                />
                                <lottie
                                  v-show="isDark === false"
                                  :width="18"
                                  :height="18"
                                  :options="blackAnim"
                                  style="margin: 0"
                                  v-on:animCreated="
                                    (a) =>
                                      handleDropdownAnimation(
                                        a,
                                        'emmy_best_picture_two',
                                        'black'
                                      )
                                  "
                                />
                                <p
                                  class="dark:text-white"
                                  style="transform: scaleY(-1)"
                                >
                                  Best Picture
                                </p>
                              </div>
                            </div>
                            <b-collapse
                              id="collapse-32-inner"
                              class="mt-2 text-black dark:text-white"
                            >
                              <p style="margin-left: 29px">SecondCaractory</p>
                            </b-collapse>
                          </b-card>
                        </b-collapse>
                      </b-collapse>
                    </div>
                    <!-- batfa award -->
                    <div>
                      <div
                        v-b-toggle.collapse-41
                        variant="primary"
                        style=""
                        class="chevron_down"
                        @click="toggleDropdownAnimation('batfa_awards')"
                      >
                        <div
                          class="flex dark:text-white"
                          style="margin-left: -23px"
                        >
                          <div style="transform: scaleY(-1); margin-top: -2px">
                            <lottie
                              v-show="isDark === true"
                              :width="23"
                              :height="20"
                              :options="whiteAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'batfa_awards',
                                    'white'
                                  )
                              "
                            />
                            <lottie
                              v-show="isDark === false"
                              :width="18"
                              :height="18"
                              :options="blackAnim"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'batfa_awards',
                                    'black'
                                  )
                              "
                            />
                          </div>
                          BATFA Awards
                        </div>
                      </div>
                      <b-collapse id="collapse-41" class="mt-2">
                        <div
                          v-b-toggle.collapse-41-inner
                          size="sm"
                          @click="toggleDropdownAnimation('batfa_best_picture')"
                          class="chevron_down"
                        >
                          <div
                            class="flex"
                            style="transform: scaleY(-1); margin-top: -2px"
                          >
                            <lottie
                              v-show="isDark === true"
                              :width="23"
                              :height="20"
                              :options="whiteAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'batfa_best_picture',
                                    'white'
                                  )
                              "
                            />
                            <lottie
                              v-show="isDark === false"
                              :width="18"
                              :height="18"
                              :options="blackAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'batfa_best_picture',
                                    'black'
                                  )
                              "
                            />
                            <p
                              class="dark:text-white"
                              style="transform: scaleY(-1)"
                            >
                              Best Picture
                            </p>
                          </div>
                        </div>
                        <b-collapse
                          id="collapse-41-inner"
                          class="mt-2 text-black dark:text-white"
                        >
                          <b-card>
                            <div
                              v-b-toggle.collapse-42-inner
                              size="sm"
                              @click="
                                toggleDropdownAnimation(
                                  'batfa_best_picture_two'
                                )
                              "
                              class="chevron_down"
                            >
                              <div
                                class="flex"
                                style="transform: scaleY(-1); margin-top: -2px"
                              >
                                <lottie
                                  v-show="isDark === true"
                                  :width="23"
                                  :height="20"
                                  :options="whiteAnim"
                                  style="margin: 0"
                                  v-on:animCreated="
                                    (a) =>
                                      handleDropdownAnimation(
                                        a,
                                        'batfa_best_picture_two',
                                        'white'
                                      )
                                  "
                                />
                                <lottie
                                  v-show="isDark === false"
                                  :width="18"
                                  :height="18"
                                  :options="blackAnim"
                                  style="margin: 0"
                                  v-on:animCreated="
                                    (a) =>
                                      handleDropdownAnimation(
                                        a,
                                        'batfa_best_picture_two',
                                        'black'
                                      )
                                  "
                                />
                                <p
                                  class="dark:text-white"
                                  style="transform: scaleY(-1)"
                                >
                                  Best Picture
                                </p>
                              </div>
                            </div>
                            <b-collapse
                              id="collapse-42-inner"
                              class="mt-2 text-black dark:text-white"
                            >
                              <p style="margin-left: 29px">SecondCaractory</p>
                            </b-collapse>
                          </b-card>
                        </b-collapse>
                      </b-collapse>
                    </div>
                    <!-- cannes award -->
                    <div>
                      <div
                        v-b-toggle.collapse-51
                        variant="primary"
                        style=""
                        class="chevron_down"
                        @click="toggleDropdownAnimation('cannes_awards')"
                      >
                        <div
                          class="flex dark:text-white"
                          style="margin-left: -23px"
                        >
                          <div style="transform: scaleY(-1); margin-top: -2px">
                            <lottie
                              v-show="isDark === true"
                              :width="23"
                              :height="20"
                              :options="whiteAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'cannes_awards',
                                    'white'
                                  )
                              "
                            />
                            <lottie
                              v-show="isDark === false"
                              :width="18"
                              :height="18"
                              :options="blackAnim"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'cannes_awards',
                                    'black'
                                  )
                              "
                            />
                          </div>
                          Cannes Awards
                        </div>
                      </div>
                      <b-collapse id="collapse-51" class="mt-2">
                        <div
                          v-b-toggle.collapse-51-inner
                          size="sm"
                          @click="
                            toggleDropdownAnimation('cannes_best_picture')
                          "
                          class="chevron_down"
                        >
                          <div
                            class="flex"
                            style="transform: scaleY(-1); margin-top: -2px"
                          >
                            <lottie
                              v-show="isDark === true"
                              :width="23"
                              :height="20"
                              :options="whiteAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'cannes_best_picture',
                                    'white'
                                  )
                              "
                            />
                            <lottie
                              v-show="isDark === false"
                              :width="18"
                              :height="18"
                              :options="blackAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'cannes_best_picture',
                                    'black'
                                  )
                              "
                            />
                            <p
                              class="dark:text-white"
                              style="transform: scaleY(-1)"
                            >
                              Best Picture
                            </p>
                          </div>
                        </div>
                        <b-collapse
                          id="collapse-51-inner"
                          class="mt-2 text-black dark:text-white"
                        >
                          <b-card>
                            <div
                              v-b-toggle.collapse-52-inner
                              size="sm"
                              @click="
                                toggleDropdownAnimation(
                                  'cannes_best_picture_two'
                                )
                              "
                              class="chevron_down"
                            >
                              <div
                                class="flex"
                                style="transform: scaleY(-1); margin-top: -2px"
                              >
                                <lottie
                                  v-show="isDark === true"
                                  :width="23"
                                  :height="20"
                                  :options="whiteAnim"
                                  style="margin: 0"
                                  v-on:animCreated="
                                    (a) =>
                                      handleDropdownAnimation(
                                        a,
                                        'cannes_best_picture_two',
                                        'white'
                                      )
                                  "
                                />
                                <lottie
                                  v-show="isDark === false"
                                  :width="18"
                                  :height="18"
                                  :options="blackAnim"
                                  style="margin: 0"
                                  v-on:animCreated="
                                    (a) =>
                                      handleDropdownAnimation(
                                        a,
                                        'cannes_best_picture_two',
                                        'black'
                                      )
                                  "
                                />
                                <p
                                  class="dark:text-white"
                                  style="transform: scaleY(-1)"
                                >
                                  Best Picture
                                </p>
                              </div>
                            </div>
                            <b-collapse
                              id="collapse-52-inner"
                              class="mt-2 text-black dark:text-white"
                            >
                              <p style="margin-left: 29px">SecondCaractory</p>
                            </b-collapse>
                          </b-card>
                        </b-collapse>
                      </b-collapse>
                    </div>
                    <!-- berlin internation film -->
                    <div>
                      <div
                        v-b-toggle.collapse-61
                        variant="primary"
                        style=""
                        class="chevron_down"
                        @click="toggleDropdownAnimation('berlin_awards')"
                      >
                        <div
                          class="flex dark:text-white"
                          style="margin-left: -23px"
                        >
                          <div style="transform: scaleY(-1); margin-top: -2px">
                            <lottie
                              v-show="isDark === true"
                              :width="23"
                              :height="20"
                              :options="whiteAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'berlin_awards',
                                    'white'
                                  )
                              "
                            />
                            <lottie
                              v-show="isDark === false"
                              :width="18"
                              :height="18"
                              :options="blackAnim"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'berlin_awards',
                                    'black'
                                  )
                              "
                            />
                          </div>
                          Berlin Internation Film Awards
                        </div>
                      </div>
                      <b-collapse id="collapse-61" class="mt-2">
                        <div
                          v-b-toggle.collapse-61-inner
                          size="sm"
                          @click="
                            toggleDropdownAnimation('berlin_best_picture')
                          "
                          class="chevron_down"
                        >
                          <div
                            class="flex"
                            style="transform: scaleY(-1); margin-top: -2px"
                          >
                            <lottie
                              v-show="isDark === true"
                              :width="23"
                              :height="20"
                              :options="whiteAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'berlin_best_picture',
                                    'white'
                                  )
                              "
                            />
                            <lottie
                              v-show="isDark === false"
                              :width="18"
                              :height="18"
                              :options="blackAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'berlin_best_picture',
                                    'black'
                                  )
                              "
                            />
                            <p
                              class="dark:text-white"
                              style="transform: scaleY(-1)"
                            >
                              Best Picture
                            </p>
                          </div>
                        </div>
                        <b-collapse
                          id="collapse-61-inner"
                          class="mt-2 text-black dark:text-white"
                        >
                          <b-card>
                            <div
                              v-b-toggle.collapse-62-inner
                              size="sm"
                              @click="
                                toggleDropdownAnimation(
                                  'berlin_best_picture_two'
                                )
                              "
                              class="chevron_down"
                            >
                              <div
                                class="flex"
                                style="transform: scaleY(-1); margin-top: -2px"
                              >
                                <lottie
                                  v-show="isDark === true"
                                  :width="23"
                                  :height="20"
                                  :options="whiteAnim"
                                  style="margin: 0"
                                  v-on:animCreated="
                                    (a) =>
                                      handleDropdownAnimation(
                                        a,
                                        'berlin_best_picture_two',
                                        'white'
                                      )
                                  "
                                />
                                <lottie
                                  v-show="isDark === false"
                                  :width="18"
                                  :height="18"
                                  :options="blackAnim"
                                  style="margin: 0"
                                  v-on:animCreated="
                                    (a) =>
                                      handleDropdownAnimation(
                                        a,
                                        'berlin_best_picture_two',
                                        'black'
                                      )
                                  "
                                />
                                <p
                                  class="dark:text-white"
                                  style="transform: scaleY(-1)"
                                >
                                  Best Picture
                                </p>
                              </div>
                            </div>
                            <b-collapse
                              id="collapse-62-inner"
                              class="mt-2 text-black dark:text-white"
                            >
                              <p style="margin-left: 29px">SecondCaractory</p>
                            </b-collapse>
                          </b-card>
                        </b-collapse>
                      </b-collapse>
                    </div>
                    <!-- Golden Globe Awards -->
                    <div>
                      <div
                        v-b-toggle.collapse-71
                        variant="primary"
                        style=""
                        class="chevron_down"
                        @click="toggleDropdownAnimation('golden_awards')"
                      >
                        <div
                          class="flex dark:text-white"
                          style="margin-left: -23px"
                        >
                          <div style="transform: scaleY(-1); margin-top: -2px">
                            <lottie
                              v-show="isDark === true"
                              :width="23"
                              :height="20"
                              :options="whiteAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'golden_awards',
                                    'white'
                                  )
                              "
                            />
                            <lottie
                              v-show="isDark === false"
                              :width="18"
                              :height="18"
                              :options="blackAnim"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'golden_awards',
                                    'black'
                                  )
                              "
                            />
                          </div>
                          Golden Globe Awards
                        </div>
                      </div>
                      <b-collapse id="collapse-71" class="mt-2">
                        <div
                          v-b-toggle.collapse-71-inner
                          size="sm"
                          @click="
                            toggleDropdownAnimation('golden_best_picture')
                          "
                          class="chevron_down"
                        >
                          <div
                            class="flex"
                            style="transform: scaleY(-1); margin-top: -2px"
                          >
                            <lottie
                              v-show="isDark === true"
                              :width="23"
                              :height="20"
                              :options="whiteAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'golden_best_picture',
                                    'white'
                                  )
                              "
                            />
                            <lottie
                              v-show="isDark === false"
                              :width="18"
                              :height="18"
                              :options="blackAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'golden_best_picture',
                                    'black'
                                  )
                              "
                            />
                            <p
                              class="dark:text-white"
                              style="transform: scaleY(-1)"
                            >
                              Best Picture
                            </p>
                          </div>
                        </div>
                        <b-collapse
                          id="collapse-71-inner"
                          class="mt-2 text-black dark:text-white"
                        >
                          <b-card>
                            <div
                              v-b-toggle.collapse-72-inner
                              size="sm"
                              @click="
                                toggleDropdownAnimation(
                                  'golden_best_picture_two'
                                )
                              "
                              class="chevron_down"
                            >
                              <div
                                class="flex"
                                style="transform: scaleY(-1); margin-top: -2px"
                              >
                                <lottie
                                  v-show="isDark === true"
                                  :width="23"
                                  :height="20"
                                  :options="whiteAnim"
                                  style="margin: 0"
                                  v-on:animCreated="
                                    (a) =>
                                      handleDropdownAnimation(
                                        a,
                                        'golden_best_picture_two',
                                        'white'
                                      )
                                  "
                                />
                                <lottie
                                  v-show="isDark === false"
                                  :width="18"
                                  :height="18"
                                  :options="blackAnim"
                                  style="margin: 0"
                                  v-on:animCreated="
                                    (a) =>
                                      handleDropdownAnimation(
                                        a,
                                        'golden_best_picture_two',
                                        'black'
                                      )
                                  "
                                />
                                <p
                                  class="dark:text-white"
                                  style="transform: scaleY(-1)"
                                >
                                  Best Picture
                                </p>
                              </div>
                            </div>
                            <b-collapse
                              id="collapse-72-inner"
                              class="mt-2 text-black dark:text-white"
                            >
                              <p style="margin-left: 29px">SecondCaractory</p>
                            </b-collapse>
                          </b-card>
                        </b-collapse>
                      </b-collapse>
                    </div>
                    <!-- Venice Film Festival Awards -->
                    <div>
                      <div
                        v-b-toggle.collapse-81
                        variant="primary"
                        style=""
                        class="chevron_down"
                        @click="toggleDropdownAnimation('venice_awards')"
                      >
                        <div
                          class="flex dark:text-white"
                          style="margin-left: -23px"
                        >
                          <div style="transform: scaleY(-1); margin-top: -2px">
                            <lottie
                              v-show="isDark === true"
                              :width="23"
                              :height="20"
                              :options="whiteAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'venice_awards',
                                    'white'
                                  )
                              "
                            />
                            <lottie
                              v-show="isDark === false"
                              :width="18"
                              :height="18"
                              :options="blackAnim"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'venice_awards',
                                    'black'
                                  )
                              "
                            />
                          </div>
                          Venice Film Festival Awards
                        </div>
                      </div>
                      <b-collapse id="collapse-81" class="mt-2">
                        <div
                          v-b-toggle.collapse-81-inner
                          size="sm"
                          @click="
                            toggleDropdownAnimation('venice_best_picture')
                          "
                          class="chevron_down"
                        >
                          <div
                            class="flex"
                            style="transform: scaleY(-1); margin-top: -2px"
                          >
                            <lottie
                              v-show="isDark === true"
                              :width="23"
                              :height="20"
                              :options="whiteAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'venice_best_picture',
                                    'white'
                                  )
                              "
                            />
                            <lottie
                              v-show="isDark === false"
                              :width="18"
                              :height="18"
                              :options="blackAnim"
                              style="margin: 0"
                              v-on:animCreated="
                                (a) =>
                                  handleDropdownAnimation(
                                    a,
                                    'venice_best_picture',
                                    'black'
                                  )
                              "
                            />
                            <p
                              class="dark:text-white"
                              style="transform: scaleY(-1)"
                            >
                              Best Picture
                            </p>
                          </div>
                        </div>
                        <b-collapse
                          id="collapse-81-inner"
                          class="mt-2 text-black dark:text-white"
                        >
                          <b-card>
                            <div
                              v-b-toggle.collapse-82-inner
                              size="sm"
                              @click="
                                toggleDropdownAnimation(
                                  'venice_best_picture_two'
                                )
                              "
                              class="chevron_down"
                            >
                              <div
                                class="flex"
                                style="transform: scaleY(-1); margin-top: -2px"
                              >
                                <lottie
                                  v-show="isDark === true"
                                  :width="23"
                                  :height="20"
                                  :options="whiteAnim"
                                  style="margin: 0"
                                  v-on:animCreated="
                                    (a) =>
                                      handleDropdownAnimation(
                                        a,
                                        'venice_best_picture_two',
                                        'white'
                                      )
                                  "
                                />
                                <lottie
                                  v-show="isDark === false"
                                  :width="18"
                                  :height="18"
                                  :options="blackAnim"
                                  style="margin: 0"
                                  v-on:animCreated="
                                    (a) =>
                                      handleDropdownAnimation(
                                        a,
                                        'venice_best_picture_two',
                                        'black'
                                      )
                                  "
                                />
                                <p
                                  class="dark:text-white"
                                  style="transform: scaleY(-1)"
                                >
                                  Best Picture
                                </p>
                              </div>
                            </div>
                            <b-collapse
                              id="collapse-82-inner"
                              class="mt-2 text-black dark:text-white"
                            >
                              <p style="margin-left: 29px">SecondCaractory</p>
                            </b-collapse>
                          </b-card>
                        </b-collapse>
                      </b-collapse>
                    </div>
                  </div>
                  <p class="text-xs">
                    <label class="checkbox-container mt-3"
                      >All
                      <input type="checkbox" checked="checked" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="checkbox-container"
                      >Winner
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="checkbox-container mb-3"
                      >Nominee
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </p>
                </b-card>
              </b-collapse>
              <div class="flex justify-between">
                <div class="text-xs flex" style="font-weight: bold">
                  <p>Awards Year</p>
                </div>
                <div
                  v-b-toggle.collapse-year
                  style="
                    background: none;
                    border: none;
                    overflow-anchor: none;
                    outline: none;
                    margin-top: -8px;
                  "
                  @click="toggleDropdownAnimation('awardsYear')"
                >
                  <lottie
                    v-show="isDark === true"
                    :width="30"
                    :height="30"
                    :options="whiteAnim"
                    v-on:animCreated="
                      (a) => handleDropdownAnimation(a, 'awardsYear', 'white')
                    "
                  />
                  <lottie
                    v-show="isDark === false"
                    :width="30"
                    :height="30"
                    :options="blackAnim"
                    v-on:animCreated="
                      (a) => handleDropdownAnimation(a, 'awardsYear', 'black')
                    "
                  />
                </div>
              </div>

              <b-collapse visible id="collapse-year" class="mt-5">
                <b-card>
                  <div>
                    <vue-slider
                      class="text-black dark:text-white"
                      v-model="value"
                      :min="1927"
                      :max="2021"
                      :tooltip="'always'"
                      :process-style="{ backgroundColor: '#675f5f' }"
                      :tooltip-style="{
                        backgroundColor: '#fff',
                        color: '#252525',
                        borderColor: '#252525',
                      }"
                      :enable-cross="false"
                    >
                      <template v-slot:dot="{ focus }">
                        <div :class="['custom-dot', { focus }]"></div>
                      </template>
                    </vue-slider>
                  </div>
                </b-card>
              </b-collapse>

              <div>
                <div class="flex justify-between">
                  <p class="text-xs mt-3 genre">By Genre</p>
                  <div
                    v-b-toggle.collapse-Genre
                    class=""
                    style="
                      overflow-anchor: none;
                      background: none;
                      color: black;
                      border: none;
                      outline: none;
                    "
                    @click="toggleDropdownAnimation('genre')"
                  >
                    <lottie
                      v-show="isDark === true"
                      :width="30"
                      :height="30"
                      :options="whiteAnim"
                      v-on:animCreated="
                        (a) => handleDropdownAnimation(a, 'genre', 'white')
                      "
                    />
                    <lottie
                      v-show="isDark === false"
                      :width="30"
                      :height="30"
                      :options="blackAnim"
                      v-on:animCreated="
                        (a) => handleDropdownAnimation(a, 'genre', 'black')
                      "
                    />
                  </div>
                </div>
                <b-collapse visible id="collapse-Genre">
                  <b-card>
                    <div class="">
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Action
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Adventure
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Animation
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Comedy
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Crime
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Documentary
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Drama
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Family
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Fantasy
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        History
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Horror
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Music
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Mystery
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Romance
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Science Fiction
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        Thriller
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        TV Movie
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                      >
                        War
                      </button>
                      <button
                        class="text-xs bg-custom-gray rounded-full text-white px-2 py-1"
                      >
                        Western
                      </button>
                    </div>
                  </b-card>
                </b-collapse>
              </div>
              <div class="flex justify-between">
                <p class="text-xs mt-3 known">By Known For</p>
                <div
                  v-b-toggle.collapse-byKnown
                  style="
                    overflow-anchor: none;
                    background: none;
                    color: black;
                    border: none;
                    outline: none;
                  "
                  @click="toggleDropdownAnimation('known')"
                >
                  <lottie
                    v-show="isDark === true"
                    :width="30"
                    :height="30"
                    :options="whiteAnim"
                    v-on:animCreated="
                      (a) => handleDropdownAnimation(a, 'known', 'white')
                    "
                  />
                  <lottie
                    v-show="isDark === false"
                    :width="30"
                    :height="30"
                    :options="blackAnim"
                    v-on:animCreated="
                      (a) => handleDropdownAnimation(a, 'known', 'black')
                    "
                  />
                </div>
              </div>
              <b-collapse visible id="collapse-byKnown">
                <b-card
                  ><label class="checkbox-container"
                    >Acting
                    <input type="checkbox" checked="checked" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Directing
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Visual Effects
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Production
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Camera
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Art
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Lighting
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Costume & Make-Up
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Sound
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Editing
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Crew
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container"
                    >Writing
                    <input type="checkbox" />
                    <span class="checkmark"></span> </label
                ></b-card>
              </b-collapse>

              <div class="text-xs">
                <div class="flex justify-between">
                  <p class="mt-4 mb-2 dark:text-white font-bold">By Company</p>

                  <div
                    v-b-toggle.collapse-Company
                    style="
                      background: none;
                      border: none;
                      outline: none;
                      font-size: 15px;
                    "
                    @click="toggleDropdownAnimation('company')"
                  >
                    <lottie
                      v-show="isDark === true"
                      :width="30"
                      :height="30"
                      :options="whiteAnim"
                      v-on:animCreated="
                        (a) => handleDropdownAnimation(a, 'company', 'white')
                      "
                    />
                    <lottie
                      v-show="isDark === false"
                      :width="30"
                      :height="30"
                      :options="blackAnim"
                      v-on:animCreated="
                        (a) => handleDropdownAnimation(a, 'company', 'black')
                      "
                    />
                  </div>
                </div>
                <b-collapse
                  visible
                  id="collapse-Company"
                  class="flex justify-center text-center"
                >
                  <b-card>
                    <div
                      class="bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                    >
                      Fox Film
                    </div>
                    <div
                      class="bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                    >
                      Metro-Goldwyn-Mayer
                    </div>
                    <div
                      class="bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                    >
                      Paramount Pictures
                    </div>
                    <div
                      class="bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                    >
                      RKO Radio Pictures
                    </div>
                    <div
                      class="bg-custom-gray rounded-full text-white px-2 py-1 my-1"
                    >
                      United Artists
                    </div>
                  </b-card>
                </b-collapse>
              </div>
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
    <div
      class="shadow-md dark:bg-black bg-back-white rounded-lg dark:text-white my-3 px-2"
    >
      <div class="flex justify-between py-2">
        <p class="text-xl">Where to Watch</p>
        <div
          v-b-toggle.collapse-where
          style="outline: none; transform: scaleY(-1); margin-left: auto"
          @click="toggleDropdownAnimation('watch')"
        >
          <lottie
            v-show="isDark === true"
            :width="30"
            :height="30"
            :options="whiteAnim"
            v-on:animCreated="
              (a) => handleDropdownAnimation(a, 'watch', 'white')
            "
          />
          <lottie
            v-show="isDark === false"
            :width="30"
            :height="30"
            :options="blackAnim"
            v-on:animCreated="
              (a) => handleDropdownAnimation(a, 'watch', 'black')
            "
          />
        </div>
      </div>
      <b-collapse id="collapse-where">
        <b-card>
          <p class="text-xs">Country</p>
          <form action="/">
            <select
              name="cars"
              id="cars"
              class="text-xs w-full rounded-lg dark:text-black"
              style="outline: none; border: solid 1px"
            >
              <option value="volvo">
                <span> Germany</span>
              </option>
              <option value="saab">Canada</option>
              <option value="opel">United State</option>
              <option value="audi">France</option>
              <option value="audi">England</option>
            </select>
          </form>
          <div class="flex flex-wrap overflow-hidden">
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle.png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (0).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (1).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (2).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (3).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (4).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (5).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (6).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (7).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (8).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (9).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (10).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (11).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (12).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (13).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (14).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (15).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (16).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (17).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (18).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (19).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (20).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (21).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (22).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (23).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (24).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
            <div class="w-1/4 p-1">
              <img
                src="@/assets/image/watch/Rectangle (25).png"
                alt=""
                class="rounded-lg shadow-md w-full"
                data-v-2a183b29=""
              />
            </div>
          </div>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>
<script>
import Lottie from "vue-lottie/src/lottie.vue";
import * as blackLottie from "~/assets/lottie/black.json";
import * as whiteLottie from "~/assets/lottie/downWhite.json";
import VueSlider from "vue-slider-component/dist-css/vue-slider-component.umd.min.js";
import "vue-slider-component/dist-css/vue-slider-component.css";
import RadioButton from "~/components/radio-button";
// import theme
import "vue-slider-component/theme/default.css";

export default {
  components: {
    Lottie,
    VueSlider,
    RadioButton,
  },
  data() {
    return {
      visible: true,
      selected: null,
      toggles: {
        sort: true,
        filters: false,
        watch: false,
        awards: false,
        awardsYear: false,
        best_picture: false,
      },
      dropdownAnimation: {},
      blackAnim: {
        animationData: blackLottie.default,
        loop: false,
        autoplay: false,
      },
      whiteAnim: {
        animationData: whiteLottie.default,
        loop: false,
        autoplay: false,
      },
      value: [1970, 2001],
      marks: [1927, 2021],
    };
  },
  computed: {
    isDark() {
      return this.$store.state.darkMode;
    },
  },
  methods: {
    handleDropdownAnimation: function (anim, key, type) {
      if (!this.dropdownAnimation[key]) {
        this.dropdownAnimation[key] = {};
      }
      this.dropdownAnimation[key][type] = anim;
      if (this.toggles[key]) {
        anim.playSegments([59, 60], true);
      }
    },
    toggleDropdownAnimation: function (key, type) {
      const segments = this.toggles[key] ? [60, 96] : [0, 36];
      this.dropdownAnimation[key].black.stop();
      this.dropdownAnimation[key].white.stop();
      this.dropdownAnimation[key].black.playSegments(segments, true);
      this.dropdownAnimation[key].white.playSegments(segments, true);
      this.toggles[key] = !this.toggles[key];
    },
  },
};
</script>
<style>
@import "~/assets/css/styles.css";
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0rem;
}
.card {
  border: none;
  background: none;
}
.btn-secondary:hover {
  color: black;
}
.borderLine {
  border: 1px solid;
}
.slidecontainer {
  width: 100%;
}

.sliders {
  -webkit-appearance: none;
  width: 100%;
  height: 1px;
  outline: none;
  transition: opacity 0.2s;
}

.sliders:hover {
  opacity: 1;
}

.sliders::-webkit-sliders-thumb {
  -webkit-appearance: none;
  appearance: none;
  border-radius: 10rem;
  width: 12px;
  height: 12px;
  background: black;
  cursor: pointer;
}
div.mytree div {
  padding-left: 5px;
}

div.mytree div.parent div {
  display: none;
  cursor: default;
}

div.mytree div.parent {
  cursor: pointer;
}
.germany {
  background-image: url("https://cdn4.iconfinder.com/data/icons/world-flags-12/512/Untitled-2-10-128.png");
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background-size: 100%;
  margin-right: 5px;
  background-repeat: no-repeat;
}
.genre {
  font-weight: bold;
  margin-right: 66% !important;
}
.known {
  outline: none;
  margin-right: 54%;
  font-weight: bold;
}
.chevron_down {
  overflow-anchor: none;
  background: none;
  color: black;
  border: none;
  font-size: 12px;
  padding: 0rem;
  width: 100%;
  outline: none;
}
</style>
(ns lattice-proteins.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def cell-size 20)


(defn setup
  []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  (q/background 230)

  {:chain [:east :east :north :north :east :south :east :north :north :north :north :west]
   :cursor [0 0]}
  )


(defn update-state
  [state]
  state
  )


(defn move-cursor
  [[i j] direction]
  (case direction
    :east  [(inc i) j]
    :south [i (inc j)]
    :west  [(dec i) j]
    :north [i (dec j)]
    [i j]
    ))


(defn connector-line
  [dir scale]
  (case dir
    :east  [scale 0]
    :south [0 scale]
    :west  [(- scale) 0]
    :north [0 (- scale)]
    [0 0]))


(defn draw-state
  [state]
  (q/background 230)
  (let []
    (q/fill 20 255 200)
    (q/stroke 255 255 0 120)
    (loop [cursor (:cursor state)
           chain  (:chain state)]
      (let [[i j] cursor]
        (q/with-translation [(+ (* cell-size i) (/ (q/width) 2))
                             (+ (* cell-size j) (/ (q/width) 2))]
          (apply q/line (concat [0 0] (connector-line (first chain) cell-size)))
          (q/ellipse 0 0 10 10)
          )
        (if (empty? chain)
          nil
          (recur (move-cursor cursor (first chain))
                 (rest chain))
          )))))

        


(q/defsketch lattice-proteins
  :host "lattice-proteins"
  :size [400 400]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])

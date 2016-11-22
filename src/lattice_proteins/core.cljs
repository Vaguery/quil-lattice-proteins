(ns lattice-proteins.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m])
  )

(def cell-size 10)


(defn setup
  []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  (q/background 230)
  {:chain (into [] (concat (repeat 2 :east)
                           (repeat 2 :north)
                           (repeat 3 :west)
                           (repeat 4 :south)
                           (repeat 5 :east)
                           (repeat 6 :north)
                           (repeat 7 :west)
                           (repeat 8 :south)
                           (repeat 9 :east)))
   :cursor [0 0]
   :frustration 0
   :updates 0}
  )


(defn random-fold
  [chain]
  (let [changed-idx (inc (rand-int (dec (count chain))))]

    (into [] 
      (concat (take changed-idx chain)
      (list (rand-nth [:east :west :north :south]))
      (drop (inc changed-idx) chain)))
    ))



(defn next-ij
  [[i j] direction]
  (case direction
    :east  [(inc i) j]
    :south [i (inc j)]
    :west  [(dec i) j]
    :north [i (dec j)]
    [i j]
    ))


(defn all-ij
  [start-ij chain]
  (reduce
    (fn [ij-points next-move]
      (conj
        ij-points
        (next-ij (last ij-points) next-move)))
    [start-ij]
    chain))


(defn collisions?
  [chain]
  (let [points (all-ij [0 0] chain)]
    (not= (count points) (count (set points)))))



(defn update-state
  [state]
  (let [new-fold        (random-fold (:chain state))
        bad?            (collisions? new-fold)
        old-frustration (:frustration state)]
  {:chain
    (if bad?
      (:chain state)
      new-fold)
   :cursor [0 0]
   :frustration (if bad? (inc old-frustration) old-frustration)
   :updates (inc (:updates state))}
   ))



(defn end-point
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
  (q/fill 99 255 0 100)
  (q/text (/ (:frustration state) (:updates state)) 10 10)
  (q/fill 99 255 200 100)
  (loop [cursor (:cursor state)
         chain  (:chain state)]
    (let [[i j] cursor]
      (q/with-translation [(+ (* cell-size i) (/ (q/width) 2))
                           (+ (* cell-size j) (/ (q/width) 2))]
        (q/stroke 255 255 0 100)
        (apply q/line (concat [0 0] (end-point (first chain) cell-size)))
        (q/no-stroke)
        (q/ellipse 0 0 10 10)
        )
      (if (empty? chain)
        nil
        (recur (next-ij cursor (first chain))
               (rest chain))
                ))))

        


(q/defsketch lattice-proteins
  :host "lattice-proteins"
  :size [500 500]
  :setup setup
  :draw draw-state
  :update update-state
  :middleware [m/fun-mode]
  )

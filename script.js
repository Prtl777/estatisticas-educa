// Navigation functionality
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item")
  const sections = document.querySelectorAll(".content-section")
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const sidebar = document.getElementById("sidebar")

  // Handle navigation clicks
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      const sectionId = this.getAttribute("data-section")

      // Remove active class from all nav items and sections
      navItems.forEach((nav) => nav.classList.remove("active"))
      sections.forEach((section) => section.classList.remove("active"))

      // Add active class to clicked nav item and corresponding section
      this.classList.add("active")
      document.getElementById(sectionId).classList.add("active")

      // Close mobile menu if open
      if (window.innerWidth <= 768) {
        sidebar.classList.remove("active")
      }

      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })

      // Reset and re-trigger animations
      resetAnimations()
      setTimeout(checkScrollAnimations, 100)
    })
  })

  // Mobile menu toggle
  mobileMenuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active")
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (window.innerWidth <= 768) {
      if (!sidebar.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
        sidebar.classList.remove("active")
      }
    }
  })

  // Scroll animations
  const animatedElements = document.querySelectorAll(".animate-on-scroll")

  function checkScrollAnimations() {
    animatedElements.forEach((element) => {
      const rect = element.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight * 0.85 && rect.bottom > 0

      if (isVisible) {
        element.classList.add("visible")
      }
    })
  }

  function resetAnimations() {
    animatedElements.forEach((element) => {
      element.classList.remove("visible")
    })
  }

  // Check animations on scroll
  window.addEventListener("scroll", checkScrollAnimations)

  // Initial check for animations
  checkScrollAnimations()

  // Frequency table calculation
  const frequencyInputs = document.querySelectorAll(".frequency-input")
  const addRowBtn = document.getElementById("addRowBtn")
  const frequencyTableBody = document.getElementById("frequencyTableBody")

  function calculateFrequencies() {
    const inputs = document.querySelectorAll(".frequency-input")
    let total = 0

    // Calculate total
    inputs.forEach((input) => {
      const value = parseFloat(input.value) || 0
      total += value
    })

    // Update display
    document.getElementById("totalFrequency").textContent = total
    document.getElementById("totalFrequencyDisplay").textContent = total

    // Calculate and display frequencies
    inputs.forEach((input) => {
      const row = input.closest("tr")
      const value = parseFloat(input.value) || 0
      const frequencyCell = row.querySelector(".frequency-value")
      const relativeCell = row.querySelector(".frequency-relative")

      frequencyCell.textContent = value > 0 ? value : "-"

      if (total > 0 && value > 0) {
        const percentage = ((value / total) * 100).toFixed(2)
        relativeCell.textContent = percentage + "%"
      } else {
        relativeCell.textContent = "-"
      }
    })
  }

  // Add event listeners to existing inputs
  frequencyInputs.forEach((input) => {
    input.addEventListener("input", calculateFrequencies)
  })

  // Add row functionality
  addRowBtn.addEventListener("click", () => {
    const newRow = document.createElement("tr")
    newRow.innerHTML = `
      <td><input type="text" class="table-input" placeholder="Ex: 6-8"></td>
      <td><input type="number" class="table-input frequency-input" placeholder="Ex: 10"></td>
      <td class="frequency-value">-</td>
      <td class="frequency-relative">-</td>
    `

    frequencyTableBody.appendChild(newRow)

    // Add event listener to the new input
    const newInput = newRow.querySelector(".frequency-input")
    newInput.addEventListener("input", calculateFrequencies)
  })

  // Handle window resize
  let resizeTimer
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 768) {
        sidebar.classList.remove("active")
      }
    }, 250)
  })
})
